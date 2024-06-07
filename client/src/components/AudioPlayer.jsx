import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ audioSrc, title, subtitle, hidePlayer }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };

        const handleAudioEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };

        if (audio) {
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleAudioEnded);

            // Play audio if already playing
            if (isPlaying) {
                audio.play().catch(error => {
                    console.error('Error playing audio:', error);
                });
            }
        }

        return () => {
            if (audio) {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleAudioEnded);
            }
        };
    }, [audioSrc, isPlaying]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        audio.currentTime = e.target.value;
        setCurrentTime(audio.currentTime);
    };

    const exitPlayer = () => {
        const audio = audioRef.current;
        setIsPlaying(false);
        audio.pause();
        hidePlayer(); // Call the hidePlayer function passed from the parent
    };

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between z-40 px-16">
            <div>
                <p className="text-lg font-bold">{title}</p>
                <p className="text-sm">{subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={togglePlayPause} className="bg-white text-black px-4 py-2 rounded">
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-64 bg-black"
                />
                <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
            </div>
            <audio ref={audioRef} src={audioSrc} />
            <img src="src/assets/Exit Button.png" className='bg-white rounded-full' onClick={exitPlayer} alt="" />
        </div>
    );
};

export default AudioPlayer;

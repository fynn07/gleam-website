import React, { useState, useEffect, useRef } from 'react';
import AudioPlayer from './AudioPlayer'; // Import the new AudioPlayer component

const Music = () => {
    const scrollRef = useRef(null);
    const itemsRef = useRef([]);
    const [audioSrc, setAudioSrc] = useState(null);
    const [currentSong, setCurrentSong] = useState({ title: '', subtitle: '' });
    const [isPlayerVisible, setIsPlayerVisible] = useState(false); // State to control visibility

    const playMusic = (music, title) => {
        let src;
        if (music === "Back Hug") {
            src = "/assets/music/back hug - gleam.mp3";
        } else if (music === "Merry Go Round") {
            src = "/assets/music/gleam - merry go round.mp3";
        } else if (music === "Tearing Myself Apart") {
            src = "/assets/music/tearing_myself_apart.mp3";
        } else if (music === "GoldFish") {
            src = "/assets/music/gleam - goldfish.mp3";
        } else if (music === "Burgundy Red Lipstick") {
            src = "/assets/music/burgundy - gleam.mp3";
        }

        if (src) {
            setAudioSrc(src);
            setCurrentSong({ title, subtitle: music });
            setIsPlayerVisible(true); // Show the player when a song is played
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                    entry.target.classList.remove('animate-fadeOut');
                } else {
                    entry.target.classList.add('animate-fadeOut');
                    entry.target.classList.remove('animate-fadeIn');
                }
            });
        }, {
            threshold: 0.1,
        });

        itemsRef.current.forEach(item => observer.observe(item));

        return () => {
            itemsRef.current.forEach(item => observer.unobserve(item));
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 0,
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 0,
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen my-96">
            <div className="flex-col gap-80 justify-center items-center">
                <h2 
                    className="text-5xl text-white font-oswald pb-12 text-center animate-fadeOut" 
                    ref={el => itemsRef.current[0] = el}
                >
                    OUR DEMOS
                </h2>
                <div className="relative w-full max-w-screen-lg flex justify-center items-center">
                    <img onClick={scrollLeft} ref={el => itemsRef.current[1] = el} className='h-16 mb-12 cursor-pointer hidden xl:block 2xl:block' src="/assets/left-arrow-svgrepo-com.svg" alt="" />
                    <div className="grid gap-16 grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        xl:mx-4 xl:grid-cols-none xl:grid-flow-col xl:gap-12 xl:overflow-x-hidden xl:overflow-y-hidden xl:scroll-smooth xl:w-full
                        2xl:mx-4 2xl:grid-cols-none 2xl:grid-flow-col 2xl:gap-12 2xl:overflow-x-hidden 2xl:overflow-y-hidden 2xl:scroll-smooth 2xl:w-full"
                        style={{ scrollSnapType: 'x mandatory' }} ref={scrollRef}>
                        
                        {[
                            { src: "/assets/gleam-song-1.jpeg", title: "GLEAM", subtitle: "Back Hug" },
                            { src: "/assets/gleam-song-2.jpeg", title: "GLEAM", subtitle: "Merry Go Round" },
                            { src: "/assets/gleam-song-3.jpeg", title: "GLEAM", subtitle: "GoldFish" },
                            { src: "/assets/gleam-song-5.jpeg", title: "GLEAM", subtitle: "Burgundy Red Lipstick" },
                            { src: "/assets/gleam-song-4.jpeg", title: "GLEAM", subtitle: "Tearing Myself Apart" },
                        ].map((song, index) => (
                            <div key={index} onClick={() => playMusic(song.subtitle, song.title)} className="flex-col flex gap-2 object-cover w-64 animate-fadeOut" style={{ scrollSnapAlign: 'start' }} ref={el => itemsRef.current[index + 1] = el}>
                                <img className="h-64 w-64 custom-border-animation rounded-md" src={song.src} alt="" />
                                <p className="text-center text-white font-pragati text-xl">{song.title}</p>
                                <p className="text-center text-white font-pragati">{song.subtitle}</p>
                            </div>
                        ))} 
                    </div>
                    <img onClick={scrollRight} ref={el => itemsRef.current[10] = el} className='h-16 mb-12 cursor-pointer transform -scale-x-100 hidden xl:block 2xl:block' src="/assets/left-arrow-svgrepo-com.svg" alt="" />
                </div>
                {isPlayerVisible && (
                    <AudioPlayer
                        audioSrc={audioSrc}
                        title={currentSong.title}
                        subtitle={currentSong.subtitle}
                        hidePlayer={() => setIsPlayerVisible(false)} // Pass the hidePlayer function
                    />
                )}
            </div>
        </div>
    );
};

export default Music;

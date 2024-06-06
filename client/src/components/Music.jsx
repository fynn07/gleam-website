import React, { useEffect, useRef } from 'react';

const Music = () => {
    const itemsRef = useRef([]);

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

    return (
        <div className="flex justify-center items-center min-h-screen my-96">
            <div className="flex-col gap-80 justify-center items-center">
                <h2 
                    className="text-5xl text-white font-oswald pb-12 text-center animate-fadeOut" 
                    ref={el => itemsRef.current[0] = el}
                >
                    OUR MUSIC
                </h2>
                <div className="relative w-full max-w-screen-lg flex justify-center items-center">
                    <div className="grid gap-16 grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-none xl:grid-flow-col xl:gap-24 xl:overflow-x-auto xl:overflow-y-hidden xl:scroll-smooth xl:w-full
                        2xl:grid-cols-none 2xl:grid-flow-col 2xl:gap-24 2xl:overflow-x-auto 2xl:overflow-y-hidden 2xl:scroll-smooth 2xl:w-full"
                        style={{ scrollSnapType: 'x mandatory' }}>
                        
                        {[
                            { src: "src/assets/gleam-song-1.jpeg", title: "GLEAM", subtitle: "Burgundy Red Lipstick" },
                            { src: "src/assets/gleam-song-2.jpeg", title: "GLEAM", subtitle: "Merry Go Round" },
                            { src: "src/assets/gleam-song-3.jpeg", title: "GLEAM", subtitle: "Tearing Myself Apart" },
                            { src: "src/assets/gleam-song-4.jpeg", title: "GLEAM", subtitle: "GoldFish" },
                            { src: "src/assets/gleam-song-5.jpeg", title: "GLEAM", subtitle: "Back Hug" },
                        ].map((song, index) => (
                            <div key={index} className="flex-col flex gap-2 object-cover w-64 animate-fadeOut" style={{ scrollSnapAlign: 'start' }} ref={el => itemsRef.current[index + 1] = el}>
                                <img className="h-64 w-64 rounded-md" src={song.src} alt="" />
                                <p className="text-center text-white font-pragati text-xl">{song.title}</p>
                                <p className="text-center text-white font-pragati">{song.subtitle}</p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;

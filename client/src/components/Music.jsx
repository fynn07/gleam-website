
const Music = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen pb-96">
                <div className="flex-col gap-80 justify-center items-center">
                    <h2 className="text-5xl text-white font-oswald pb-12 text-center">OUR MUSIC</h2>
                    <div className="relative w-full max-w-screen-lg flex justify-center items-center">
                        <div className="grid grid-flow-col gap-28 overflow-x-auto overflow-y-hidden scroll-smooth w-full" style={{scrollSnapType: 'x mandatory'}}>
                            <div className="flex-col flex gap-2 object-cover w-64" style={{scrollSnapAlign: 'start'}}>
                                <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-1.jpeg" alt="" />
                                <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                                <p className="text-center text-white font-pragati">Burgundy Red Lipstick</p>
                            </div>
                            <div className="flex-col flex gap-2 object-cover w-64" style={{scrollSnapAlign: 'start'}}>
                                <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-2.jpeg" alt="" />
                                <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                                <p className="text-center text-white font-pragati">Merry Go Round</p>
                            </div>
                            <div className="flex-col flex gap-2 object-cover w-64" style={{scrollSnapAlign: 'start'}}>
                                <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-3.jpeg" alt="" />
                                <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                                <p className="text-center text-white font-pragati">Tearing Myself Apart</p>
                            </div>
                            <div className="flex-col flex gap-2 object-cover w-64" style={{scrollSnapAlign: 'start'}}>
                                <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-4.jpeg" alt="" />
                                <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                                <p className="text-center text-white font-pragati">GoldFish</p>
                            </div>
                            <div className="flex-col flex gap-2 object-cover w-64" style={{scrollSnapAlign: 'start'}}>
                                <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-5.jpeg" alt="" />
                                <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                                <p className="text-center text-white font-pragati">Back Hug</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;

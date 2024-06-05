const Music = () => {
    return (
        <>
        <div className="flex justify-center items-center h-screen pb-40">
            <div className="flex-col gap-80 justify-center items-center">
                <h2 className="text-5xl text-white font-oswald pb-12 text-center">OUR MUSIC</h2>
                <div className="flex gap-20">
                    <div className="flex-col justify-center items-center flex gap-2">
                        <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-1.jpeg" alt="" />
                        <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                        <p className="text-center text-white font-pragati">Burgundy Red Lipstick</p>
                    </div>
                    <div className="flex-col justify-center items-center flex gap-2">
                        <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-2.jpeg" alt="" />
                        <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                        <p className="text-center text-white font-pragati">Merry Go Round</p>
                    </div>
                    <div className="flex-col justify-center items-center flex gap-2">
                        <img className="h-64 w-64 rounded-md" src="src/assets/gleam-song-3.jpeg" alt="" />
                        <p className="text-center text-white font-pragati text-xl">GLEAM</p>
                        <p className="text-center text-white font-pragati">Tearing Myself Apart</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Music
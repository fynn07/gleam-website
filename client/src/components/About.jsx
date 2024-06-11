const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center h-screen items-center gap-14 lg:flex-row xl:flex-row 2xl:flex-row">
                <div>
                    <h2 className="font-oswald text-6xl text-white mb-6 text-center md:text-6xl lg:text-6xl xl:text-8xl 2xl:text-8xl">WHO WE ARE</h2>
                    <p className="font-pragati text-3xl text-white leading-normal drop-shadow text-center 2xl:text-4xl">A “passion project” made by four teens from Cebu City. An outlet to express our pent up feelings and emotions through the art of music. Feel free to listen to our noise and support us!
                    </p>
                </div>
                <img className="h-7rem rounded-full invisible hidden lg:visible lg:block xl:visible xl:block 2xl:visible 2xl:block" src="/assets/gleam_logo.png" alt="gleam logo" />

            </div>
        </>
    )
}

export default About
const About = () => {
    return (
        <>
            <div className="flex justify-center h-screen items-center gap-14">
                <div className="">
                    <h2 className="font-oswald text-8xl text-white mb-6">WHO WE ARE</h2>
                    <p className="font-pragati text-3xl text-white leading-normal drop-shadow">A “passion project” made by four teens from Cebu City.
                        This band is simply an outlet to express our pent up
                        feelings and emotions through the art of music. Feel 
                        free to listen to our stuff and if you like our noise then don't
                        hesitate to support us.
                    </p>
                </div>
                <img className="h-7rem rounded-full" src="src/assets/gleam_logo.png" alt="gleam logo" />

            </div>
        </>
    )
}

export default About
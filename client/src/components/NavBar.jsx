const NavBar = ({ scrollToAbout, scrollToMusic, scrollToGigs }) => {
    return (
        <nav className="flex justify-around bg-transparent py-4 sticky top-10 z-50">
            <p className="font-pragati text-white text-2xl hover:cursor-pointer" onClick={scrollToGigs}>GIGS</p>
            <p className="font-pragati text-white text-2xl hover:cursor-pointer" onClick={scrollToMusic}>MUSIC</p>
            <p className="font-pragati text-white text-2xl hover:cursor-pointer" onClick={scrollToAbout}>ABOUT</p>
            <p className="font-pragati text-white text-2xl hover:cursor-pointer">NEWS</p>
        </nav>
    );
}

export default NavBar;

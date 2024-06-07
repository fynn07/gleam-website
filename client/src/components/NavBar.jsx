const NavBar = ({ scrollToAbout, scrollToMusic, scrollToGigs }) => {
    return (
        <nav className="flex justify-around pt-2 pb-6 sticky top-10 z-50">
            <p className="font-pragati text-white text-xl hover:cursor-pointer" onClick={scrollToGigs}>GIGS</p>
            <p className="font-pragati text-white text-xl hover:cursor-pointer" onClick={scrollToMusic}>MUSIC</p>
            <p className="font-pragati text-white text-xl hover:cursor-pointer" onClick={scrollToAbout}>ABOUT</p>
            <p className="font-pragati text-white text-xl hover:cursor-pointer">MERCH</p>
        </nav>
    );
}

export default NavBar;

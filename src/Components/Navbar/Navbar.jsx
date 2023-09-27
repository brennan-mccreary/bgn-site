const menu = document.querySelector(".mobile-menu");

const Navbar = () => {

    const toggleMobileMenu = () => {
        menu.classList.toggle("hidden")
    }

    return ( 
        <nav className="bg-gray-400 fixed top-0 right-0 left-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* Primary Nav and Logo */}
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <a href="/" className="flex items-center py-5 px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                </svg>
                                <span className="font-bold">Logo Text</span>
                            </a>
                        </div>
                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center space-x-3">
                            <a href="#/" className="py-5 px-3 hover:text-gray-900">Home</a>
                            <a href="#/news" className="py-5 px-3 hover:text-gray-900">News</a>
                        </div>
                    </div>
                    {/* Secondary Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#/login" className="py-5 px-3 hover:text-gray-900">Login</a>
                        <a href="#/signup" className="py-2 px-3 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 bg-bgngreen rounded-md shadow transition duration-300">Sign-up</a>
                    </div>
                    {/* Mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className="hidden mobile-menu md:hidden text-center transition duration-500">
                <a href="#/discord" className="block py-4 px-4 text-sm hover:bg-gray-200">Home</a>
                <a href="#/news" className="block py-4 px-4 text-sm hover:bg-gray-200">News</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
import { useRef } from 'react';
import TreeSVG from '../../Images/TreeSVG.svg'

const Navbar = () => {
    const menuRef = useRef();
    
    const toggleMobileMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <nav className="bg-gradient-to-r from-bgngreen-900 via-bgngreen-700 via-50% to-bgngreen-900 fixed top-0 right-0 left-0 text-gray-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* Primary Nav and Logo */}
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <a href="/" className="flex items-center py-5 px-3 ">
                                <img src={TreeSVG} className='w-8 h-8 mx-2 ' alt="Tree" />
                                <span className="font-bold text-xl">Branch Out.</span>
                            </a>
                        </div>
                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center space-x-3">
                            <a href="#/" className="py-5 px-3 font-semibold hover:text-gray-100">Home</a>
                            <a href="#/about" className="py-5 px-3 font-semibold hover:text-gray-100">About</a>
                        </div>
                    </div>
                    {/* Secondary Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#/login" hidden="true" className="py-5 px-3 font-semibold hover:text-gray-500">Login</a>
                        <a href="#/signup" hidden="true" className="py-2 px-3 font-semibold shadow-md shadow-bgngray-900/80 hover:shadow-inner text-bgngray-950 hover:text-bgngray-700 bg-bgngreen-600 hover:bg-bgngreen-100 rounded-md transition duration-200">Sign-up</a>
                        <a href="#/discord" className="py-2 px-3 font-semibold shadow-md shadow-bgngray-900/80 hover:shadow-inner text-bgngray-950 hover:text-bgngray-700 bg-bgngreen-600 hover:bg-bgngreen-100 rounded-md transition duration-200">Join Our Discord</a>
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
            <div className="hidden mobile-menu md:hidden text-center transition duration-500" ref={menuRef}>
                <a href="#/" className="block font-semibold py-4 px-4 text-sm hover:bg-gray-200" onClick={toggleMobileMenu}>Home</a>
                <a href="#/about" className="block font-semibold py-4 px-4 text-sm hover:bg-gray-200" onClick={toggleMobileMenu}>About</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
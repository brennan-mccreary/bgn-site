import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return ( 
        <header className="w-full z-50 bg-gradient-to-b from-bgngreen-800/80 to-transparent pb-12 pt-5 fixed top-0 ">
                <nav className="flex relative">
                    {/* <div className="m-auto">
                        <ul className="flex space-x-12 opacity-100 text-2xl font-semibold drop-shadow-2xl">
                            <li className='text-bgngray-50 hover:text-bgngreen-200/100 transform hover:-translate-y-1 duration-200 transition-all'>About</li>
                            <li className='text-bgngray-50 hover:text-bgngreen-200/100 transform hover:-translate-y-1 duration-200 transition-all'>Partners</li>
                            <li className='text-bgngray-50 hover:text-bgngreen-200/100 transform hover:-translate-y-1 duration-200 transition-all'>Community</li>
                        </ul>
                    </div> */}
                    <Link to="/discord" className='right-10 absolute'> 
                        <button className="hover:bg-bgngreen-700/30 hover:outline-none outline outline-bgngreen-500 outline-1 rounded-full px-5 py-2 shadow-xl duration-200 transition-all">
                            <div className=" text-bgngray-50 font-bold transform hover:-translate-y-1 duration-300 transition-all">Join Today</div>
                        </button>
                    </Link>
                </nav>
            </header>
     );
}
 
export default HomeHeader;
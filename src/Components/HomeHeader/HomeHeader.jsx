import React from 'react';

import TreeSVG from '../../Images/TreeSVG';

const HomeHeader = () => {
    return ( 
        <header className='text-xl md:text-4xl lg:text-5xl xl:text-6xl text-bgngray-50 font-bold font-mono px-3'>
            <div className='flex justify-center'>
                <TreeSVG className="w-28 min-w-24"/>
                <h1 className='my-auto px-4 text-center'>Branch Out and Discover New Content!</h1>
            </div>
        </header>
     );
}
 
export default HomeHeader;
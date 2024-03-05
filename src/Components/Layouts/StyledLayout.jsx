import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const StyledLayout = () => {
    return ( 
        <div>
            <Navbar/>
            <Outlet/>
        </div>
     );
}
 
export default StyledLayout;
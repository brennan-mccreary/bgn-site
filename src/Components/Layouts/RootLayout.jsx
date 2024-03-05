import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return ( 
        <div>
            {/* Could have a header here */}
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default RootLayout;
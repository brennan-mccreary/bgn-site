import { Outlet } from "react-router-dom";


const UtilitiesLayout = () => {
    return ( 
        <div className='h-screen w-screen'>
            <Outlet/>
        </div>
  
     );
}
 
export default UtilitiesLayout;
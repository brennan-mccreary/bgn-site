//Package Imports
import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";

//Pages Imports
import Construction from './Pages/Construction/Construction';
import Discord from './Pages/Discord/Discord';
import Error from './Pages/Error/Error';
import About from './Pages/About/About';

//Component Imports
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='bg-bgngray-950 h-screen'>
        <Routes>
          <Route
            path='/'
            element={<Construction/>}
          />
          <Route
            path='/discord'
            element={<Discord/>}
          />
          <Route
            path='/about'
            element={<About/>}
          />
          
          
          <Route
            path='/*'
            element={<Error/>}
          />
        </Routes>
      </div>
    </>
    
  );
}

export default App;

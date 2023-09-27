//Package Imports
import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";

//Pages Imports
import Construction from './Pages/Construction/Construction';
import Discord from './Pages/Discord/Discord';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className='bg-bgngray h-screen'>
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
          path='/*'
          element={<Error/>}
        />
      </Routes>
    </div>
  );
}

export default App;

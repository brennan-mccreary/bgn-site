//Package Imports
import './App.css';
import { Routes, Route } from "react-router-dom";

//Pages Imports
import Construction from './Pages/Construction/Construction';
import Discord from './Pages/Discord/Discord';
import Error from './Pages/Error/Error';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

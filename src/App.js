//Package Imports
import './App.css';
import './index.css';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

//Pages Imports
import SponsorBanner from './Components/Animations/SponsorBanner';
import Discord from './Pages/Discord/Discord'

//Component Imports
import Construction from './Pages/Construction/Construction'
import Home from './Pages/Home/Home'

//Layout Imports
import UtilitiesLayout from './Components/Layouts/UtilitiesLayout';
import StyledLayout from './Components/Layouts/StyledLayout';
import RootLayout from './Components/Layouts/RootLayout';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route element={<StyledLayout/>}>
        <Route
          index
          element={<Home/>}
        />
      </Route>
      {/* <Route
          index
          element={<Construction/>}
        /> */}
      <Route
          path='discord'
          element={<Discord/>}
        />
      <Route path='utilities' elemenet={<UtilitiesLayout/>}>
        <Route path='sponsor-banner' element={<SponsorBanner/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

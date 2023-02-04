import Home from './pages/Home'
import MapPage from './pages/map'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/map"} element={<MapPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
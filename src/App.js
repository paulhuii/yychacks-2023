import Home from './pages/Home'
import Winsport from './pages/Winsport'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Winsport"} element={<Winsport/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Reels from "./pages/Reels"
import Dashboard from "./pages/Dashboard"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Trending from "./pages/Trending"
import Sports from "./pages/Sports"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/createAccount"} element={<CreateAccount/>}/>
            <Route path={"/reels"} element={<Reels/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/trending"} element={<Trending/>}/>
            <Route path={"/sports"} element={<Sports/>}/>


        </Routes>
      </BrowserRouter>
  );
}

export default App;

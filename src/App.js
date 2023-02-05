import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Reels from "./pages/Reels"
import Dashboard from "./pages/Dashboard"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Trending from "./pages/Trending"
import Sports from "./pages/Sports"
import Art from "./pages/Art"
import SW from "./pages/SW";
import Calendar from "react-calendar";

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
            <Route path={"/art"} element={<Art/>}/>
            <Route path={"/SW"} element={<SW/>}/>
            <Route path={"/Calendar"} element={<Calendar/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
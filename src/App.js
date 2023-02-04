import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/CreateAccount"} element={<CreateAccount/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;

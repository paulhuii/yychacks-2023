import Home from './pages/Home'
import Calendar from './pages/Calendar'
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
            <Route path={"/Calendar"} element={<Calendar/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;

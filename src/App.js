import Home from './pages/Home'
import Calendar from './pages/Calendar'
import SW from './pages/SW'
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
            <Route path={"/SW"} element={<SW/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;

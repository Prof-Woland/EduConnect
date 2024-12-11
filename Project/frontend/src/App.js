import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/MAIN/Body';
import Login from './components/loginPages/Login'
import Register from './components/loginPages/Register'
import CoursePage from './components/CoursePage/CoursePage';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Body/>}/>
      <Route path="interships" element={<Body/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="registration" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;

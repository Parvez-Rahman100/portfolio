import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<AboutMe></AboutMe>}></Route>
     </Routes>
    </div>
  );
}

export default App;

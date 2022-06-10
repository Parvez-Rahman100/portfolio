import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar';
import NotFound from './Pages/NotFound/NotFound';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<AboutMe></AboutMe>}></Route>
       <Route path='#projects' element={<Projects></Projects>}></Route>
       <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

import './App.scss';
import{Routes,Route,useLocation} from 'react-router-dom'
//import { Router } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/Home/Index';
import Skills from './containers/Skills/Index';
import Resume from './containers/Resume/Index';
import Portfolio from './containers/Portfolio/Index';
import Contact from './containers/Contact/Index';
import About from './containers/About/Index';
import Navbar from './components/Navbar/Index';
import particles from './utils.js/particles';
function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main) 
    }

    const renderParticleJsInHomePage = location.pathname === "/";

  
  return (
    <div className="App">
     {/* partcles js*/}

     {
      renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit}/>
      )
     }

         

     
     {/* Navbar*/}
     <Navbar/>

     {/* main page content*/}
     <div className="App__main-page-content">
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </div>
    </div>
  );
}
  export default App;

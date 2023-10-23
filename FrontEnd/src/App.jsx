import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { konamiCodeFunc } from '../utils/konamiCode';

//COMPONENTS IMPORT
import Home from './components/Home.jsx';
import Links from './components/Links';
import Projects from './components/Projects';
import DevNavBar from './components/DevNavBar';



function App() {

  const [devBarToggle, setDevBarToggle] = useState(true);

  const devToggleHandler = (boolState) => {
    setDevBarToggle(boolState);
  }

  useEffect(() => {
    document.addEventListener('keydown', devBarHandler, true);
  }, []);



  const devBarHandler = (e) => {
    if (konamiCodeFunc(e) === true) {
      setDevBarToggle(true)
    }
  }


  // document.body.style.backgroundColor = 'rgb(31 41 55)'; //! perhaps don't keep this
  document.body.style.backgroundImage = "url(../src/assets/test11.jpg)"; //! why do I have to go out then back in to get this to work?
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  return (
    <>
      <div className=' text-red-500'>
        {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} />}
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div >
    </ >
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { konamiCodeFunc } from '../utils/konamiCode';

//COMPONENTS IMPORT
import Home from './components/Home.jsx';
import Projects from './components/Projects';
import DevNavBar from './components/DevNavBar';
import CV from './components/CV';
import SocialLinks from './components/SocialLinks';

//todo: refactor all of the components since a lot of them contain the same code/styling so clean this up


function App() {



  const [devBarToggle, setDevBarToggle] = useState(false);

  //TODO##############################################################################
  //Either use some kind of CDN or have in a database and fetch each image on request. This would be to avoid having the user have to download every background
  const backgroundImageVariations = {
    backgroundOne: document.body.style.backgroundImage = "url(../src/assets/test12.jpg)",
    backgroundTwo: document.body.style.backgroundImage = "url(../src/assets/test11.jpg)",
    backgroundThree: document.body.style.backgroundImage = "url(../src/assets/test13.jpg)",

  }
  const [backgroundPicture, setBackgroundPicture] = useState(backgroundImageVariations.backgroundOne);

  //TODO##############################################################################


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
  // document.body.style.backgroundImage = "url(../src/assets/test12.jpg)"; //! why do I have to go out then back in to get this to work?
  document.body.style.backgroundImage = backgroundPicture;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";


  return (
    <>
      <div className=' text-red-500'>
        {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/CV' element={<CV />} />
          <Route path='/socials' element={<SocialLinks />} />
        </Routes>
      </div >
    </ >
  )
}

export default App

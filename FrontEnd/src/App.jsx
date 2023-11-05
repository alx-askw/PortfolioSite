import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { konamiCodeFunc } from '../utils/konamiCode';

import { animated, useSpring } from '@react-spring/web';


//COMPONENTS IMPORT
import Home from './components/Home.jsx';
import Projects from './components/Projects';
import DevNavBar from './components/DevNavBar';
import CV from './components/CV';
import SocialLinks from './components/SocialLinks';

import TestComp from './components/TestComp.jsx';

//todo: refactor all of the components since a lot of them contain the same code/styling so clean this up


function App() {



  const [devBarToggle, setDevBarToggle] = useState(false);

  //TODO##############################################################################
  //Either use some kind of CDN or have in a database and fetch each image on request. This would be to avoid having the user have to download every background
  const backgroundImageVariations = {
    backgroundOne: {
      image: document.body.style.backgroundImage = "url(../src/assets/test12.jpg)",
      author: "John Towner",
      imageName: "aerial photo of brown moutains",
      link: "https://unsplash.com/photos/aerial-photo-of-brown-moutains-JgOeRuGD_Y4"
    },
    backgroundTwo: {
      image: document.body.style.backgroundImage = "url(../src/assets/test11.jpg)",
      author: "Chloé Lam",
      imageName: "swamp surrounded with green pine trees during daytime",
      link: "https://unsplash.com/photos/swamp-surrounded-with-green-pine-trees-during-daytime-I4ScSrKsfIg"
    },
    backgroundThree: {
      image: document.body.style.backgroundImage = "url(../src/assets/test13.jpg)",
      author: "Jack B",
      imageName: "photography of white boats beside bridge during nighttime",
      link: "https://unsplash.com/photos/photography-of-white-boats-beside-bridge-during-nighttime-AdN1QHKJCck"
    }
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



  const [isVisible, setIsVisible] = useState(false);
  const setVis = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
  }

  // document.body.style.backgroundColor = 'rgb(31 41 55)'; //! perhaps don't keep this
  // document.body.style.backgroundImage = "url(../src/assets/test12.jpg)"; //! why do I have to go out then back in to get this to work?
  document.body.style.backgroundImage = backgroundPicture.image;
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
        <p className='creditInfo'>&copy; Site creation: Alx Askw | Photo credit: {backgroundPicture.author}</p>
      </div >
      <button onClick={setVis} style={{ color: "blue" }}>BUTTON</button>
      <TestComp isVisible={isVisible}></TestComp>
    </ >
  )
}

export default App

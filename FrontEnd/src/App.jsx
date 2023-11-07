import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Routes, Navigate, useLocation, Router } from 'react-router-dom';
import { konamiCodeFunc } from '../utils/konamiCode';

import { animated, useSpring, useTransition } from '@react-spring/web';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


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


  // document.body.style.backgroundColor = 'rgb(31 41 55)'; //! perhaps don't keep this
  // document.body.style.backgroundImage = "url(../src/assets/test12.jpg)"; //! why do I have to go out then back in to get this to work?
  document.body.style.backgroundImage = backgroundPicture.image;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";


  const location = useLocation();
  const transitions = useTransition(location, {
    from: { transform: 'translate3d(-100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    config: { tension: 210, friction: 260 },
    exitBeforeEnter: true // https://stackoverflow.com/questions/68630220/react-spring-usetransition-on-carousel-style-component-causing-overlap-during-tr/71337663#71337663


  })

  const paraRef = useRef();

  return (
    <>
      {/* {transitions((style, item) => ( */}
      {/* <animated.div className=' text-red-500'> */}
      <div className=' text-red-500'>
        {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}
        <Parallax pages={5} ref={paraRef}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <Projects />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <CV />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
            <SocialLinks />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            <TestComp />
          </ParallaxLayer>
        </Parallax>

        <p className='creditInfo'>&copy; Site creation: Alx Askw | Photo credit: {backgroundPicture.author}</p>
      </div >
      {/* ))} */}
    </ >
  )
}

export default App

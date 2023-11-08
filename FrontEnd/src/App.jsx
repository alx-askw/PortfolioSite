import { useEffect, useRef, useState } from 'react'
import './App.css'
import { konamiCodeFunc } from '../utils/konamiCode';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


//COMPONENTS IMPORT
import Home from './components/Home.jsx';
import Projects from './components/Projects';
import DevNavBar from './components/DevNavBar';
import CV from './components/CV';
import SocialLinks from './components/SocialLinks';
import TestComp from './components/TestComp.jsx';
import LandingPage from './components/LandingPage.jsx';
import AboutMe from './components/AboutMe.jsx';


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
  const [backgroundPicture, setBackgroundPicture] = useState(backgroundImageVariations.backgroundThree);

  //TODO##############################################################################


  useEffect(() => {
    document.addEventListener('keydown', devBarHandler, true);
  }, []);

  const devBarHandler = (e) => {
    if (konamiCodeFunc(e) === true) {
      setDevBarToggle(true)
    }
  }

  document.body.style.backgroundImage = backgroundPicture.image;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";


  const paraRef = useRef(); //! Need to short-circ the scrollTo prop



  return (
    <>
      <div className=' text-red-500'>
        <Parallax pages={5} ref={paraRef}>
          <ParallaxLayer offset={0} speed={0.5}>
            {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}
            <LandingPage scrollTo={(offset) => paraRef.current?.scrollTo(offset)} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}
            <AboutMe scrollTo={(offset) => paraRef.current?.scrollTo(offset)} />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}

            <Projects scrollTo={(offset) => paraRef.current?.scrollTo(offset)} />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
            {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}

            <CV scrollTo={(offset) => paraRef.current?.scrollTo(offset)} />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            {devBarToggle && <DevNavBar setDevBarToggle={setDevBarToggle} setBackgroundPicture={setBackgroundPicture} backgroundImageVariations={backgroundImageVariations} />}

            <SocialLinks scrollTo={(offset) => paraRef.current?.scrollTo(offset)} />
          </ParallaxLayer>
        </Parallax>
        <p className='creditInfo'>&copy; Site creation: Alx Askw | Photo credit: {backgroundPicture.author}</p>
      </div >
    </ >
  )
}

export default App

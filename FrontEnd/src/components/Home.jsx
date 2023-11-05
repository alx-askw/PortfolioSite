import './Home.css';
import Navbar from './Navbar';
import Links from './Links';
import AboutMe from './AboutMe';
import { useSpring, animated } from '@react-spring/web';


function Home() {

    const userLocation = {
        loc: "~/alx-askw/portfolio",
        oldLoc: "~/portfolio/src/home"
    }

    const linksAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
    const aboutMeAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <>
            <Navbar userLocation={userLocation} ></Navbar>
            <animated.div className='homeContainer'>
                <Links></Links>
                <AboutMe></AboutMe>
            </animated.div>
        </>
    )
}

export default Home

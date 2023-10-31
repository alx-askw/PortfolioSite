import './Home.css';
import Navbar from './Navbar';
import Links from './Links';
import AboutMe from './AboutMe';
function Home() {

    const userLocation = {
        loc: "~/alx-askw/portfolio",
        oldLoc: "~/portfolio/src/home"
    }

    return (
        <>
            <Navbar userLocation={userLocation} ></Navbar>
            <div className='homeContainer'>
                <Links></Links>
                <AboutMe></AboutMe>

            </div>
        </>
    )
}

export default Home

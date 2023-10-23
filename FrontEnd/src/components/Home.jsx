import './Home.css';
import Navbar from './Navbar';
import Links from './Links';
import AboutMe from './AboutMe';
function Home() {

    const userLocation = {
        loc: "~/portfolio/src/home"
    }
    return (
        <>
            <Navbar userLocation={userLocation} ></Navbar>
            <div className='homeContainer'>
                <AboutMe></AboutMe>
                <Links></Links>
            </div>
        </>
    )
}

export default Home

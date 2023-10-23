import './Home.css';
import Navbar from './Navbar';
import Links from './Links';

function Home() {

    const userLocation = {
        loc: "~/portfolio/src/home"
    }
    return (
        <>
            <Navbar userLocation={userLocation} ></Navbar>
            <Links></Links>
        </>
    )
}

export default Home

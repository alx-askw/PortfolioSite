import Navbar from "./Navbar";
import './SocialLinks.css';
import Links from "./Links";
import SocialBox from "./SocialBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';



function SocialLinks({ scrollTo }) {

    return (
        <>
            <div className="socialContainer">
                <div className="navigation bg-gray-800">
                    <FontAwesomeIcon className="navIcon" icon={faMap} size="2x" />
                    <h2 className="navHead">Navigator</h2>
                    <h4 className="current" onClick={() => scrollTo(1)}>About me</h4>
                    <FontAwesomeIcon className='leftArrow' icon={faArrowLeft} size="2x" />
                    <h4 className="projects" onClick={() => scrollTo(2)}>Projects</h4>

                    <h4 className="a" onClick={() => scrollTo(3)}>CV</h4>

                    <h4 className="a" onClick={() => scrollTo(4)}>Links</h4>


                </div>
                <SocialBox></SocialBox>
            </div>
            <div className="upArrow" onClick={() => scrollTo(0)}>
                <FontAwesomeIcon className='faArrow' icon={faArrowUp} size='3x' />
            </div>
        </>
    )
}

export default SocialLinks

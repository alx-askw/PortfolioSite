import "./AboutMe.css";
import Links from "./Links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function AboutMe({ scrollTo }) {
    const imagePlaceholder = '../assets/404cat.jpg';
    const imagePlaceholder2 = 'https://http.cat/images/404.jpg';

    return (
        <>
            <div className="aboutContainer">
                <div className="photoAndNav">
                    <div className="navigation bg-gray-800">
                        <FontAwesomeIcon className="navIcon" icon={faMap} size="2x" />
                        <h2 className="navHead">Navigator</h2>
                        <h4 className="current" onClick={() => scrollTo(1)}>About me</h4>
                        <FontAwesomeIcon className='leftArrow' icon={faArrowLeft} size="2x" />
                        <h4 className="projects" onClick={() => scrollTo(2)}>Projects</h4>

                        <h4 className="a" onClick={() => scrollTo(3)}>CV</h4>

                        <h4 className="a" onClick={() => scrollTo(4)}>Links</h4>


                    </div>
                    <div className="photo bg-gray-800">
                        <h3>Placeholder-Image</h3>
                        <img className="photoImage" src={imagePlaceholder2} alt="" />
                    </div>
                </div>
                <div className="aboutMeBox bg-gray-800">
                    <h4>About Me</h4>
                    <h5>•Alex</h5>
                    <h5>•23</h5>
                    <h5>•Software engineer</h5>
                    <h5>•Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <h5>Technologies (badges?)</h5>
                </div>

            </div>
        </>
    )
}

export default AboutMe;

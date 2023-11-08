import Navbar from "./Navbar";
import Links from "./Links";
import CVBox from "./CVBox";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faArrowLeft } from '@fortawesome/free-solid-svg-icons';




import './CV.css'


function CV({ scrollTo }) {


    //todo: Add E-version of CV with link to PDF
    return (

        <div className="cvContainer ">
            <div className="navigation bg-gray-800">
                <FontAwesomeIcon className="navIcon" icon={faMap} size="2x" />
                <h2 className="navHead">Navigator</h2>
                <h4 className="current" onClick={() => scrollTo(1)}>About me</h4>
                <FontAwesomeIcon className='leftArrow' icon={faArrowLeft} size="2x" />
                <h4 className="projects" onClick={() => scrollTo(2)}>Projects</h4>

                <h4 className="a" onClick={() => scrollTo(3)}>CV</h4>

                <h4 className="a" onClick={() => scrollTo(4)}>Links</h4>


            </div>
            <CVBox></CVBox>
        </div>
    )
}

export default CV;

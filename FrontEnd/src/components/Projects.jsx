import './Projects.css'
import Navbar from './Navbar'
import Links from './Links';
import ProjectBox from './ProjectsPageComponents/ProjectBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Projects({ scrollTo }) {

    //todo: add scroll function inside right hand side box (see CV page)
    //todo: add links to github


    return (
        <>
            <div className='projectsContainer'>
                <div className="navigation bg-gray-800">
                    <FontAwesomeIcon className="navIcon" icon={faMap} size="2x" />
                    <h2 className="navHead">Navigator</h2>
                    <h4 className="current" onClick={() => scrollTo(1)}>About me</h4>
                    <FontAwesomeIcon className='leftArrow' icon={faArrowLeft} size="2x" />
                    <h4 className="projects" onClick={() => scrollTo(2)}>Projects</h4>

                    <h4 className="a" onClick={() => scrollTo(3)}>CV</h4>

                    <h4 className="a" onClick={() => scrollTo(4)}>Links</h4>


                </div>
                <ProjectBox></ProjectBox>
            </div>
        </>
    )
}

export default Projects

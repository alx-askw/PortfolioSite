import './Projects.css'
import Navbar from './Navbar'
import Links from './Links';
import ProjectBox from './ProjectsPageComponents/ProjectBox';

function Projects() {

    //todo: add scroll function inside right hand side box (see CV page)
    //todo: add links to github
    const userLocation = {
        loc: "~/alx-askw/projects",
        oldLoc: "~/projects",
    }

    return (
        <>
            <Navbar userLocation={userLocation}></Navbar>
            <div className='projectsContainer'>
                <Links></Links>
                <ProjectBox></ProjectBox>
            </div>
            {/* <div className='projectsContainer bg-gray-800'>
                <h1 className='projectHeader'>Projects - </h1>
            </div> */}
        </>
    )
}

export default Projects

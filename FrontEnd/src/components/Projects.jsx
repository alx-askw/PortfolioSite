import './Projects.css'
import Navbar from './Navbar'

function Projects() {

    const userLocation = {
        loc: "~/projects"
    }

    return (
        <>
            <Navbar userLocation={userLocation}></Navbar>
            <div className='projectsContainer bg-gray-800'>

                <h1 className='projectHeader'>Projects - </h1>
            </div>
        </>
    )
}

export default Projects

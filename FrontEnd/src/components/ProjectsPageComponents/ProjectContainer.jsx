import { useState } from "react"
import './ProjectContainer.css'


function ProjectContainer({ project, index }) {


    const [stagger, setStagger] = useState()


    return (
        <>
            <div className="projectText" style={index % 2 === 0 ? { float: "right" } : { float: "left" }}>
                <h5>
                    {project.name}
                </h5>
                <p>
                    {project.description}
                </p>
            </div>
            <div className="projectImage">
                <img className="projectImage" src={project.imageLink}></img>
            </div>
        </>
    )
}

export default ProjectContainer

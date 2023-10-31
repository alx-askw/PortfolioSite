import './ProjectBox.css';
import ProjectContainer from './ProjectContainer';

function ProjectBox() {

    const exampleProjects = {
        one: {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://reactjs.org/logo-og.png"
        },
        two: {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://reactjs.org/logo-og.png"
        },
        three: {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://reactjs.org/logo-og.png"
        },
        four: {
            name: "Project 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://reactjs.org/logo-og.png"
        },
        five: {
            name: "Project 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://reactjs.org/logo-og.png"
        }
    }


    const projectArray = Object.values(exampleProjects);

    return (
        <>
            <div className='projectList  bg-gray-800'>
                <h4>Projects - </h4>
                {projectArray.map((project, index) => (
                    // todo; change key to a UUID
                    <ProjectContainer key={project.name} project={project} index={index} />
                ))
                }
            </div>
        </>
    )
}

export default ProjectBox

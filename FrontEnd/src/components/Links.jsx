import './Links.css'
import { useNavigate } from 'react-router-dom'; //TODO: maybe send this function down from app?


function Links() {

    let navigate = useNavigate();

    //* We do a little refactoring
    const linkClickHandler = (destination) => {
        navigate(`${destination}`)
    }

    const githubButtonHandler = () => {
        navigate("https://github.com/")
    }

    //todo: add indicator of what page the user is on; maybe a '<' pointing to the current page

    return (
        <>
            <div className="linkContainer bg-gray-800">
                <h4>Navigation</h4>
                <h5 type='button' onClick={() => linkClickHandler("/home")}>•About Me</h5>
                <h5 type='button' onClick={() => linkClickHandler("/projects")}>•Projects</h5>
                <h5 type='button' onClick={() => linkClickHandler("/CV")}>•CV</h5>
                <h5 type='button' onClick={() => linkClickHandler("/socials")}>•Links</h5>



            </div>
        </>
    )
}

export default Links
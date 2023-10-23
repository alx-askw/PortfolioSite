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



    return (
        <>
            <div className="linkContainer bg-gray-800">
                <h4>Links</h4>
                <h5 type='button' onClick={() => linkClickHandler("/projects")}>•Projects</h5>
                <h5  >•GitHub</h5>
                <a type="button" href="https://github.com/" target="_blank" rel="noopener noreferrer">test</a>
                <h5 type='button' onClick={() => console.log("add Link")}>•LinkedIn</h5>
                <img src='https://fontawesome.com/icons/linkedin?f=brands&s=solid'></img>
                <h5 type='button' onClick={() => linkClickHandler("/CV")}>•CV</h5>


            </div>
        </>
    )
}

export default Links
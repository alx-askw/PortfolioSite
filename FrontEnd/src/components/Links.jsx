import './Links.css'
import { useNavigate } from 'react-router-dom'; //TODO: maybe send this function down from app?
import Projects from './Projects';


function Links() {

    let navigate = useNavigate();

    const linkClickHandler = () => {
        navigate("/projects")
    }

    return (
        <>
            <div className="linkContainer bg-gray-800">
                <h4>Links</h4>
                <h5 type='button' onClick={linkClickHandler}>test</h5>
            </div>
        </>
    )
}

export default Links
import './DevNavBar.css';
import { useNavigate } from 'react-router-dom';

function DevNavBar({ setDevBarToggle }) {

    let Navigate = useNavigate();


    return (
        <>
            <div className='devContainer bg-red-900'>
                <div>
                    <h5 className='exitButton' type="button" onClick={() => setDevBarToggle(false)}>X</h5>
                    <h2 className='devHeader'>Developer Tools!</h2>
                </div>
                <div>
                    <h4>Jump Around</h4>
                    <h6 type="button" onClick={() => Navigate("/home")}>•/home</h6>
                    <h6 type="button" onClick={() => Navigate("/projects")}>•/projects</h6>
                </div>
                <div>
                    <h4>Change Background</h4>
                </div>
            </div>
        </>
    )
}

export default DevNavBar;

import './DevNavBar.css';

function DevNavBar({ setDevBarToggle }) {
    return (
        <>
            <div className='devContainer bg-red-900'>
                <div>
                    <h5 className='exitButton' type="button" onClick={() => setDevBarToggle(false)}>X</h5>
                    <h2 className='devHeader'>Developer Tools!</h2>
                </div>
                <div>
                    <h4>Jump Around</h4>
                </div>
                <div>
                    <h4>Change Background</h4>
                </div>
            </div>
        </>
    )
}

export default DevNavBar;

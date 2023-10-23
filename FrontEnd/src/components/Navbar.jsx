import './Navbar.css'
import PropTypes from 'prop-types';

function Navbar({ userLocation }) {

    const currentLoc = userLocation.loc;
    return (
        <>
            <div className='containerDiv bg-gray-800'>
                {/* <h1 className='text-red-500 bg-gray-800'>Home page</h1> */}
                <div>
                    {/* <h1>test</h1> */}
                    {currentLoc}
                </div>
            </div>
        </>
    )
}


Navbar.defaultProps = {
    userLocation: {}
}


Navbar.protoTypes = {
    userLocation: {},
    currentLoc: PropTypes.string.isRequired,
};


export default Navbar;
import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter'

function LandingPage({ scrollTo }) {

    const userLocation = { loc: "~/alx-askw/portfolio" }


    return (
        <div >
            <Navbar userLocation={userLocation}></Navbar>
            <div className='typeWriterContainer'>
                <div className='typeWriter bg-gray-800'>
                    <Typewriter
                        words={["Hello!", "Welcome!", "Привет!", "Добро пожаловать!"]}
                        loop={0}
                        cursor={true}
                        cursorBlinking={true}
                    />
                </div>
            </div>
            <div className='arrowDown' onClick={() => scrollTo(1)}>
                <FontAwesomeIcon className='faArrow' icon={faArrowDown} size='3x' />
            </div>
        </div>
    )
}

export default LandingPage

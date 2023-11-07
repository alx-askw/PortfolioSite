import Navbar from "./Navbar";
import Links from "./Links";
import CVBox from "./CVBox";

import { animated } from '@react-spring/web';


import './CV.css'


function CV() {

    const userLocation = {
        loc: "~/alx-askw/CV"
    }


    //todo: Add E-version of CV with link to PDF
    return (
        <>
            <Navbar userLocation={userLocation}></Navbar>
            <animated.div className="cvContainer ">
                <Links></Links>
                <CVBox></CVBox>
            </animated.div>
        </>
    )
}

export default CV;

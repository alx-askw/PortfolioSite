import Navbar from "./Navbar";
import './SocialLinks.css';
import Links from "./Links";
import SocialBox from "./SocialBox";

import { animated } from '@react-spring/web';


function SocialLinks() {

    const userLocation = {
        loc: "~/alx-askw/links",
    }
    return (
        <>
            <Navbar userLocation={userLocation} />
            <animated.div className="socialContainer">
                <Links></Links>
                <SocialBox></SocialBox>
            </animated.div>
        </>
    )
}

export default SocialLinks

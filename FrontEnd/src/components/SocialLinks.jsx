import Navbar from "./Navbar";
import './SocialLinks.css';
import Links from "./Links";
import SocialBox from "./SocialBox";


function SocialLinks() {

    const userLocation = {
        loc: "~/alx-askw/links",
    }
    return (
        <>
            <Navbar userLocation={userLocation} />
            <div className="socialContainer">
                <Links></Links>
                <SocialBox></SocialBox>
            </div>
        </>
    )
}

export default SocialLinks

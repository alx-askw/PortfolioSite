import Navbar from "./Navbar";
import Links from "./Links";
import CVBox from "./CVBox";

function CV() {

    const userLocation = {
        loc: "~/alx-askw/CV"
    }


    //todo: Add E-version of CV with link to PDF
    return (
        <>
            <Navbar userLocation={userLocation}></Navbar>
            <div className="cvContainer">
                <Links></Links>
                <CVBox></CVBox>
            </div>
        </>
    )
}

export default CV;

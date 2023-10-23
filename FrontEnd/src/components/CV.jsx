import Navbar from "./Navbar";


function CV() {

    const userLocation = {
        loc: "~/portfolio/src/CV"
    }

    return (
        <>
            <div>
                <Navbar userLocation={userLocationgit}></Navbar>
                <h1>Add E-version of CV with link to PDF</h1>
                {/* <i class="fa-brands fa-linkedin"></i> */}
            </div>
        </>
    )
}

export default CV;

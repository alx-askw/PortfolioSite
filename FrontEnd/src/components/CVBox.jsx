import './CVBox.css';
//!https://stackoverflow.com/questions/50891589/how-to-add-a-scroll-bar-to-a-component-in-react
//!https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js


function CVBox() {



    return (
        <>
            <div className='cvBoxContainer bg-gray-800'>
                <h4>Curriculum Vitae</h4>
                <h5 style={{ color: "blue" }}>Download PDF Version</h5>
                <h5>Bio</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>Work Experience</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>Education & Qualification</h5>
                <ul>
                    <h6>•Job 1</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </ul>
                <ul>
                    <h6>•Job 2</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </ul>
                <h5>Skills</h5>
                <ul>
                    •Skill 1
                </ul>
                <ul>
                    •Skill 2
                </ul>
                <ul>
                    •Skill 3
                </ul>
                <h5>Interests</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>
        </>
    )
}

export default CVBox

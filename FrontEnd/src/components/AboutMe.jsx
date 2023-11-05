import "./AboutMe.css";

import { animated, useSpring } from "@react-spring/web";

function AboutMe() {

    const styles = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        }
    })


    return (
        <>
            <animated.div style={styles} className="aboutContainer bg-gray-800">
                <h4>About Me</h4>
                <h5>•Alex</h5>
                <h5>•23</h5>
                <h5>•Software engineer</h5>
                <h5>•Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                <h5>Technologies (badges?)</h5>
            </animated.div>
        </>
    )
}

export default AboutMe;

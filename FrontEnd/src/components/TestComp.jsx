import { useRef } from "react";

import { animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function TestComp({ isVisible, children }) {


    const parallaxRef = useRef();

    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 24
    })


    // return (
    //     <animated.div style={styles}>Test</animated.div>
    // )


    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} ref={parallaxRef}>
            <ParallaxLayer offset={0} speed={2.5}>
                <h1 onClick={() => parallaxRef.current.scrollTo(1)} style={{ color: 'blue' }}>Parallax</h1>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2.5}>
                <h1 style={{ color: 'blue' }}>Parallax2</h1>
            </ParallaxLayer>
        </Parallax>

    )
}

export default TestComp

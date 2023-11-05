import { animated, useSpring } from "@react-spring/web";


function TestComp({ isVisible, children }) {

    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 24
    })


    return (
        <animated.div style={styles}>Test</animated.div>
    )
}

export default TestComp

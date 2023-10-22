//TODO: Maybe add a dirty system so it can only be activated once per reload?
//TODO: add timer for key presses (e.g. don't press a key in 2 secs, it clears input array)

import { jsonArrayCompare } from "./arrayComparisonFunctions";

let test1 = []; //* Have to put it outside the function for persistence

export const konamiCodeFunc = (e) => {
    const correctTest = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
    test1.push(e.key);
    // console.log(test1)
    if (e.key === "Enter") {
        if (jsonArrayCompare(test1, correctTest)) {
            // console.log("konami success")
            test1 = []
            return true;
        } else {
            // console.log("failure")
            // console.log(test1)
            // console.log(correctTest)
            test1 = []
            return false;
        }
    }

}



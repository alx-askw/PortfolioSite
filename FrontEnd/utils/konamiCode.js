//TODO: Maybe add a dirty system so it can only be activated once per reload?
//TODO: add timer for key presses (e.g. don't press a key in 2 secs, it clears input array)

import { jsonArrayCompare } from "./arrayComparisonFunctions";

let userAttemptArray = []; //* Have to put it outside the function for persistence

export const konamiCodeFunc = (e) => {
    const correctTest = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
    userAttemptArray.push(e.key);
    if (e.key === "Enter") {
        if (jsonArrayCompare(userAttemptArray, correctTest)) {
            userAttemptArray = [] //clear the array
            return true;
        } else {
            userAttemptArray = [] //clear the array
            return false;
        }
    }

}



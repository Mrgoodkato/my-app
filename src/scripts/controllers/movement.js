import { movementKeys } from "../globalValues/keyboard.js";

/**
 * Function that defines the values to be returned when pressing keys and returns an object with the respective values
 * Uses a keyList array in order to see what keys are being pressed at the time
 * @param {Array} key 
 * @param {Number} movementConstant
 * @param {Object} limits
 * @param {Object} currentPos
 * @returns Vector object with x and y accordingly
 */
export function MkeysManager(keyList, movementConstant, limits, currentPos){

    const vector = {
        x: 0,
        y: 0
    }

    keyList.forEach(key => {
        
        const move = singleKeyManager(key);

        if(move.axis == 'x' && currentPos.x > 0 && currentPos.x < limits.x) vector.x = movementConstant * move.value;
        else if(move.axis == 'y' && currentPos.y > 0 && currentPos.y < limits.y) vector.y = movementConstant * move.value;

    });

    return vector;

}

/**
 * Function used to calculate the limits for the createImage object rendered in the canvas so when it is scrolled it doesn't get out of bounds in the x and y axis
 * @param {Object} dimensions 
 * @param {Number} width 
 * @param {Number} height 
 * @returns An object with the x and y values for the limits
 */
export function calculateLimits(dimensions, width, height){

    return {
        x: width - dimensions.screenWidth,
        y: height - dimensions.screenHeight
    }

}

/**
 * Function that populates an array with the current keyCodes being pressed, and removes them when released
 * @param {Array} keyList 
 * @param {String} action 
 * @param {Number} key 
 * @returns An array of numbers with the keyCodes currently being pressed, or empty array when all movement keys have been released
 */
export function createMovementKeyMap(keyList, action, key){

    if(action == 'pressed' && isMovementKey(key)){
        if(!keyList.includes(key)) keyList.push(key);
    }
    else if(action == 'released' && isMovementKey(key)){
        let index = keyList.indexOf(key);
        if(index !== -1) keyList.splice(index, 1);
    }

    return keyList;
}


//HELPER FUNCTIONS:
/**
 * Function that defines if the key input is a movement key (W,A,S,D or arrow keys)
 * @param {number} key 
 * @returns true or false based on the keyCode input
 */
function isMovementKey(key){

    if(movementKeys.includes(key)) return true;
    else return false;

}

/**
 * Function that takes a single keyCode numeric value and returns an object with the axis and value of the key for movement in the screen
 * @param {Number} key 
 * @returns Object that represents axis and value (positive or negative 1 to represent direction in screen for movement)
 */
function singleKeyManager(key){

    switch (key){

        //A or left
        case 65:
        case 37:
            return {axis: 'x', value: -1};
        //S or down
        case 83:
        case 40:
            return {axis: 'y', value: 1};
        //D or right
        case 68:
        case 39:
            return {axis: 'x', value: 1};
        //W or up
        case 87:
        case 38:
            return {axis: 'y', value: -1};
        default:
            return null;
    }

}

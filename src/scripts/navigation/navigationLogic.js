import { MkeysManager } from "../controllers/movement.js"

export function currentNavigation(limits, moveKeysList, scrollValue){

        const movementVal = MkeysManager(moveKeysList, 5, limits, scrollValue);

        return movementVal;
        

}
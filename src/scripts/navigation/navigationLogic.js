import { calculateLimits, MkeysManager } from "../controllers/movement.js"

export function currentNavigation(img, dimensions, moveKeysList, scrollValue){


        const limits = calculateLimits(dimensions, img.width, img.height);
        const movementVal = MkeysManager(moveKeysList, 5, limits, scrollValue);

        return movementVal;
        

}
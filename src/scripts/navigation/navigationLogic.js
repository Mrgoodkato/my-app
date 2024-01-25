import { FRAME } from "./camera-mapping.js";

export function FRAMEnavigator(movement, currentFRAME){

    const consolidateMove = movement.dir + movement.axis;
    const currentRNDR = currentFRAME.currentRNDR;
    const currentTLT = currentFRAME.currentTLT;
    const finalMovementRNDR = FRAME[currentRNDR][currentTLT][consolidateMove];

    console.log(finalMovementRNDR);

    return finalMovementRNDR;

}

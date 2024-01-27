//import { FRAME } from "../navigation/camera-mapping";

//WORK ON PROGRESS TO USE loadImage TO LOAD EACH IMAGE IN THE FRAME obj
function loadFRAME(FRAME){

    const FRAMEExport = {};

    FRAME.RNDR.forEach(RNDR => {
        
        let RNDRName = Object.keys(RNDR)[0];
        let RNDRDirections = RNDR[RNDRName];
        FRAMEExport[RNDRName] = {};
        
        for (let TLT in RNDRDirections){

            //JUST NEED TO CHANGE THIS FOR THE LOADIMAGE P5 METHOD!
            FRAMEExport[RNDRName][TLT] = RNDRDirections[TLT];
            

        }
        console.log(FRAMEExport[RNDRName]);

    });

    return FRAMEExport;
}

//TESTING IN NODE SETUP
const TESTFRAME = {
    RNDR: [
        {
            frontRNDR: {
                normalTLT: 'front/frontNormalTilt.png',
                leftTLT:  'front/frontLeftTilt.png',
                rightTLT:  'front/frontRightTilt.png',
                downTLT: 'front/frontDownTilt.png'
            }
        },
        {
            leftRNDR: {
                normalTLT: 'left/leftNormalTilt.png',
                leftTLT: 'left/leftLeftTilt.png',
                rightTLT: 'left/leftRightTilt.png',
                downTLT: 'left/leftDownTilt.png'
            }
        },
        {
            rightRNDR: {
                normalTLT: 'right/rightNormalTilt.png',
                leftTLT: 'right/rightLeftTilt.png',
                rightTLT: 'right/rightRightTilt.png',
                downTLT: 'right/rightDownTilt.png'
            }
        },
        {   
            upRNDR: {
                normalTLT: 'up/upNormalTilt.png',
                leftTLT: 'up/upLeftTilt.png',
                rightTLT: 'up/upRightTilt.png',
                downTLT: 'up/upDownTilt.png'
            }
        },
        {
            downRNDR: {
                normalTLT: 'down/downNormalTilt.png',
                leftTLT: 'down/downLeftTilt.png',
                rightTLT: 'down/downRightTilt.png',
                downTLT: 'down/downDownTilt.png'
            }
        },
        {
            backRNDR: {
                normalTLT: 'back/backNormalTilt.png',
                leftTLT: 'back/backLeftTilt.png',
                rightTLT: 'back/backRightTilt.png',
                downTLT: 'back/backDownTilt.png'
            }
        },
    ]
}

loadFRAME(TESTFRAME)

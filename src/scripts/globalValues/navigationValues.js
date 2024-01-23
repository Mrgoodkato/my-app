/**
 * Initial FRAME for testing that will be used as template to create further FRAMES in the LEVEL
 */
export function FRAMEConstruction(FRAME) {

    return {

        frontRNDR: {
            frontNormal: FRAME + 'front/frontNormalTilt.png',
            frontLeftTLT: FRAME + 'front/frontLeftTilt.png',
            frontRightTLT: FRAME + 'front/frontRightTilt.png',
            frontDownTLT: FRAME + 'front/frontDownTilt.png'
        },
        leftRNDR: {
            leftNormal: FRAME + 'left/leftNormalTilt.png',
            leftLeftTLT: FRAME + 'left/leftLeftTilt.png',
            leftRightTLT: FRAME + 'left/leftRightTilt.png',
            leftUpTLT: FRAME + 'left/leftUpTilt.png',
            leftDownTLT: FRAME + 'left/leftDownTilt.png'
        },
        rightRNDR: {
            rightNormal: FRAME + 'right/rightNormalTilt.png',
            rightLeftTLT: FRAME + 'right/rightLeftTilt.png',
            rightRightTLT: FRAME + 'right/rightRightTilt.png',
            rightUpTLT: FRAME + 'right/rightUpTilt.png',
            rightDownTLT: FRAME + 'right/rightDownTilt.png'
        },
        upRNDR: {
            upNormal: FRAME + 'up/upNormalTilt.png',
            upLeftTLT: FRAME + 'up/upLeftTilt.png',
            upRightTLT: FRAME + 'up/upRightTilt.png',
            upUpTLT: FRAME + 'up/upUpTilt.png',
            upDownTLT: FRAME + 'up/upDownTilt.png'
        },
        downRNDR: {
            downNormal: FRAME + 'down/downNormalTilt.png',
            downLeftTLT: FRAME + 'down/downLeftTilt.png',
            downRightTLT: FRAME + 'down/downRightTilt.png',
            downUpTLT: FRAME + 'down/downUpTilt.png',
            downDownTLT: FRAME + 'down/downDownTilt.png'
        },
        backRNDR: {
            backNormal: FRAME + 'back/backNormalTilt.png',
            backLeftTLT: FRAME + 'back/backLeftTilt.png',
            backRightTLT: FRAME + 'back/backRightTilt.png',
            backUpTLT: FRAME + 'back/backUpTilt.png',
            backDownTLT: FRAME + 'back/backDownTilt.png'
        },
        firstLoad: true,
        name: '1A',
        triggers: [
            
            {
                xMax: 450,
                xMin: 400,
                yMax: 350,
                yMin: 300,
                action: 'move'
            }
    
        ]

    }

    

}
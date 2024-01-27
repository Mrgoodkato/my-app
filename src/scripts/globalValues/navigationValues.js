/**
 * Initial FRAME for testing that will be used as template to create further FRAMES in the LEVEL
 */
export function FRAMEConstruction(FRAME) {

    return {

        RNDR: [
            {
                frontRNDR: {
                    normalTLT: FRAME + 'front/frontNormalTilt.png',
                    leftTLT: FRAME + 'front/frontLeftTilt.png',
                    rightTLT: FRAME + 'front/frontRightTilt.png',
                    downTLT: FRAME + 'front/frontDownTilt.png'
                }
            },
            {
                leftRNDR: {
                    normalTLT: FRAME + 'left/leftNormalTilt.png',
                    leftTLT: FRAME + 'left/leftLeftTilt.png',
                    rightTLT: FRAME + 'left/leftRightTilt.png',
                    downTLT: FRAME + 'left/leftDownTilt.png'
                }
            },
            {
                rightRNDR: {
                    normalTLT: FRAME + 'right/rightNormalTilt.png',
                    leftTLT: FRAME + 'right/rightLeftTilt.png',
                    rightTLT: FRAME + 'right/rightRightTilt.png',
                    downTLT: FRAME + 'right/rightDownTilt.png'
                }
            },
            {   
                upRNDR: {
                    normalTLT: FRAME + 'up/upNormalTilt.png',
                    leftTLT: FRAME + 'up/upLeftTilt.png',
                    rightTLT: FRAME + 'up/upRightTilt.png',
                    downTLT: FRAME + 'up/upDownTilt.png'
                }
            },
            {
                downRNDR: {
                    normalTLT: FRAME + 'down/downNormalTilt.png',
                    leftTLT: FRAME + 'down/downLeftTilt.png',
                    rightTLT: FRAME + 'down/downRightTilt.png',
                    downTLT: FRAME + 'down/downDownTilt.png'
                }
            },
            {
                backRNDR: {
                    normalTLT: FRAME + 'back/backNormalTilt.png',
                    leftTLT: FRAME + 'back/backLeftTilt.png',
                    rightTLT: FRAME + 'back/backRightTilt.png',
                    downTLT: FRAME + 'back/backDownTilt.png'
                }
            },
        ],

        
        currentRNDR: '',
        currentTLT: '',
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

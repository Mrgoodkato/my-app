//CHECK THE JOURNAL FOR HOW TO MAKE THIS WITH TILT!
/**
 * Movements per RENDER:
 *          1) Pan right
            2) Pan left
            3) Pan up
            4) Pan down
            5) Tilt right
            6) Tilt left
 */
export const FRAME = {
    
    frontRNDR: {

        normalTLT: {
            minusX: ['leftRNDR', 'normalTLT'],
            minusY: ['upRNDR', 'normalTLT'],
            plusX: ['rightRNDR', 'normalTLT'],
            plusY: ['downRNDR', 'normalTLT']
        },

        leftTLT:{
            minusX: ['downRNDR', 'leftTLT'],
            minusY: ['leftRNDR', 'leftTLT'],
            plusX: ['upRNDR', 'leftTLT'],
            plusY: ['rightRNDR', 'leftTLT']
        },

        rightTLT: {
            minusX: ['upRNDR', 'rightTLT'],
            minusY: ['rightRNDR', 'rightTLT'],
            plusX: ['downRNDR', 'rightTLT'],
            plusY: ['leftRNDR', 'rightTLT']
        },

        downTLT: {
            minusX: ['rightRNDR', 'downTLT'],
            minusY: ['downRNDR', 'downTLT'],
            plusX: ['leftRNDR', 'downTLT'],
            plusY: ['upRNDR', 'downTLT']
        }

    },

    backRNDR: {

        normalTLT: {
            minusX: ['rightRNDR', 'normalTLT'],
            minusY: ['upRNDR', 'normalTLT'],
            plusX: ['leftRNDR', 'normalTLT'],
            plusY: ['downRNDR', 'normalTLT']
        },

        leftTLT:{
            minusX: ['downRNDR', 'rightTLT'],
            minusY: ['rightRNDR', 'leftTLT'],
            plusX: ['upRNDR', 'rightTLT'],
            plusY: ['leftRNDR', 'leftTLT']
        },

        rightTLT: {
            minusX: ['upRNDR', 'leftTLT'],
            minusY: ['leftNDR', 'rightTLT'],
            plusX: ['downRNDR', 'leftTLT'],
            plusY: ['rightRNDR', 'rightTLT']
        },

        downTLT: {
            minusX: ['leftRNDR', 'downTLT'],
            minusY: ['downRNDR', 'normalTLT'],
            plusX: ['rightRNDR', 'downTLT'],
            plusY: ['upRNDR', 'normalTLT']
        }

    },

    upRNDR: {

        normalTLT: {
            minusX: ['leftRNDR', 'leftTLT'],
            minusY: ['backRNDR', 'downTLT'],
            plusX: ['rightRNDR', 'rightTLT'],
            plusY: ['frontRNDR', 'normalTLT']
        },

        leftTLT:{
            minusX: ['frontRNDR', 'leftTLT'],
            minusY: ['leftRNDR', 'leftTLT'],
            plusX: ['backRNDR', 'rightTLT'],
            plusY: ['rightRNDR', 'normalTLT']
        },

        rightTLT: {
            minusX: ['backRNDR', 'leftTLT'],
            minusY: ['rightRNDR', 'downTLT'],
            plusX: ['frontRNDR', 'rightTLT'],
            plusY: ['leftRNDR', 'normalTLT']
        },

        downTLT: {
            minusX: ['rightRNDR', 'leftTLT'],
            minusY: ['frontRNDR', 'downTLT'],
            plusX: ['leftRNDR', 'rightTLT'],
            plusY: ['backRNDR', 'normalTLT']
        }

    },

    downRNDR: {

        normalTLT: {
            minusX: ['leftRNDR', 'rightTLT'],
            minusY: ['frontRNDR', 'normalTLT'],
            plusX: ['rightRNDR', 'leftTLT'],
            plusY: ['backRNDR', 'downTLT']
        },

        leftTLT:{
            minusX: ['backRNDR', 'rightTLT'],
            minusY: ['leftRNDR', 'normalTLT'],
            plusX: ['frontRNDR', 'leftTLT'],
            plusY: ['rightRNDR', 'downTLT']
        },

        rightTLT: {
            minusX: ['frontRNDR', 'rightTLT'],
            minusY: ['rightRNDR', 'normalTLT'],
            plusX: ['backRNDR', 'leftTLT'],
            plusY: ['leftRNDR', 'downTLT']
        },

        downTLT: {
            minusX: ['rightRNDR', 'rightTLT'],
            minusY: ['backRNDR', 'normalTLT'],
            plusX: ['leftRNDR', 'leftTLT'],
            plusY: ['frontRNDR', 'downTLT']
        }

    },

    leftRNDR: {

        normalTLT: {
            minusX: ['backRNDR', 'normalTLT'],
            minusY: ['upRNDR', 'rightTLT'],
            plusX: ['frontRNDR', 'normalTLT'],
            plusY: ['downRNDR', 'leftTLT']
        },

        leftTLT:{
            minusX: ['downRNDR', 'downTLT'],
            minusY: ['leftRNDR', 'leftTLT'],
            plusX: ['backRNDR', 'leftTLT'],
            plusY: ['frontRNDR', 'leftTLT']
        },

        rightTLT: {
            minusX: ['upRNDR', 'downTLT'],
            minusY: ['frontRNDR', 'rightTLT'],
            plusX: ['downRNDR', 'normalTLT'],
            plusY: ['backRNDR', 'rightTLT']
        },

        downTLT: {
            minusX: ['frontRNDR', 'downTLT'],
            minusY: ['downRNDR', 'rightTLT'],
            plusX: ['backRNDR', 'downTLT'],
            plusY: ['upRNDR', 'leftTLT']
        }

    },

    rightRNDR: {

        normalTLT: {
            minusX: ['frontRNDR', 'normalTLT'],
            minusY: ['upRNDR', 'leftTLT'],
            plusX: ['backRNDR', 'normalTLT'],
            plusY: ['downRNDR', 'rightTLT']
        },

        leftTLT:{
            minusX: ['downRNDR', 'normalTLT'],
            minusY: ['frontRNDR', 'leftTLT'],
            plusX: ['upRNDR', 'downTLT'],
            plusY: ['backRNDR', 'leftTLT']
        },

        rightTLT: {
            minusX: ['upRNDR', 'normalTLT'],
            minusY: ['backRNDR', 'rightTLT'],
            plusX: ['downRNDR', 'downTLT'],
            plusY: ['frontRNDR', 'rightTLT']
        },

        downTLT: {
            minusX: ['backRNDR', 'downTLT'],
            minusY: ['downRNDR', 'leftTLT'],
            plusX: ['frontRNDR', 'downTLT'],
            plusY: ['upRNDR', 'rightTLT']
        }

    }




}
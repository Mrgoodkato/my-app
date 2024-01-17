//CHECK THE JOURNAL FOR HOW TO MAKE THIS WITH TILT!
const map = {
    
    front: {
        minusX: 'left',
        minusY: 'up',
        plusX: 'right',
        plusY: 'down'
    },

    back: {
        minusX: 'right',
        minusY: 'up',
        plusX: 'left',
        plusY: 'down'
    },

    left: {
        minusX: 'front',
        minusY: 'up',
        plusX: 'back',
        plusY: 'down'
    },

    right:{
        minusX: 'back',
        minusY: 'up',
        plusX: 'front',
        plusY: 'down'
    }



}
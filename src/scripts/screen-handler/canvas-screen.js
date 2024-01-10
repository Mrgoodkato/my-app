import { MkeysManager, createMovementKeyMap, calculateLimits } from "../controllers/movement.js";
import { initNavigation } from "../globalValues/navigationValues.js";

export function createScreen(screenElement){

    //Keys array to track keys being pressed
    let moveKeysList = [];

    //Zoom level variable
    let zoomLevel = 1;

    let gif_createImg;

    //Constant for dimensions according to the screenElement HTML div where the canvas is situated
    const dimensions = {
        screenWidth: screenElement.clientWidth,
        screenHeight: screenElement.clientHeight
    }

    //Constant object for scrolling the screen image
    const scrollValue = {
        x: 0,
        y: 0
    }

    //P5 call to all functions to preload, setup, draw and other functions pertinent to rendering graphics in the screen element
    const screen = ( p ) => {
    
        //Preloads the gif image in order to be displayed, undraggable, unselectable
        p.preload = ()=> {

            gif_createImg = p.createImg(initNavigation.url, 'alt');
            gif_createImg.elt.draggable = false;
            gif_createImg.elt.style.userSelect = 'none';

        }

        //Sets up dimensions and scrollValue initial values for the canvas
        p.setup = function() {
            const canvas = p.createCanvas(dimensions.screenWidth, dimensions.screenHeight);
            canvas.id('screenCanvasElement');
            canvas.elt.draggable = false;
            scrollValue.x = dimensions.screenWidth/5;
            scrollValue.y = dimensions.screenHeight/5;
            console.log(dimensions);
        };
        
        //Draws each frame of the screen
        p.draw = function() {

            if(p.keyIsPressed){
                const limits = calculateLimits(dimensions, gif_createImg.width, gif_createImg.height);
                const movement = MkeysManager(moveKeysList, 5, limits, scrollValue);
                scrollValue.x += movement.x;
                scrollValue.y += movement.y;
            }
            
            gif_createImg.position(-scrollValue.x, -scrollValue.y);
            gif_createImg.style('z-index', '-1');
            
        };

        //Checks once any key is pressed in the keyboard
        p.keyPressed = function() {

            moveKeysList = createMovementKeyMap(moveKeysList, 'pressed', p.keyCode);
            
        }

        //Checks if a key is released in the keyboard
        p.keyReleased = function() {

            moveKeysList = createMovementKeyMap(moveKeysList, 'released', p.keyCode);

        }

        //Triggered when mouse is clicked
        p.mouseClicked = function() {

            const pos = {
                x: p.mouseX + scrollValue.x,
                y: p.mouseY + scrollValue.y
            }
            console.log('Position:', pos.x, pos.y);
            console.log(initNavigation.triggers[0])

            if(pos.x < initNavigation.triggers[0].xMax && pos.x > initNavigation.triggers[0].xMin) {
                console.log('trigger')
                gif_createImg.elt.src = 'img-test/ANIM2.gif';
            }
        }

        //Mouse wheel event that triggers when the mouse wheel is used
        p.mouseWheel = function(e){

            zoomLevel += e.delta / 1000;

            zoomLevel = p.max(zoomLevel, 0.1);
            zoomLevel = p.min(zoomLevel, 1);

        }


    };
  
    return new p5(screen, 'main_screen');

}



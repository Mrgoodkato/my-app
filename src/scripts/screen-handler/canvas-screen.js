import {createMovementKeyMap, calculateLimits} from "../controllers/movement.js";
import { currentNavigation } from "../navigation/navigationLogic.js";
import { initNavigation } from "../globalValues/navigationValues.js";
import { leftClick } from "../controllers/mouseClick.js";

export function createScreen(screenElement){

    //Keys array to track keys being pressed
    let moveKeysList = [];

    //Zoom level variable
    let zoomLevel = 1;

    //Screen image variable, can change due to src changing due to movement
    let screenImg;

    //Limits variable calculated each time a new screenImg is generated, used to define the limits of the screen for movement and navigation
    let limits;

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

            screenImg = p.createImg(initNavigation.urlFront, 'alt');
            screenImg.elt.draggable = false;
            screenImg.elt.style.userSelect = 'none';

        }

        //Sets up dimensions and scrollValue initial values for the canvas
        p.setup = function() {
            const canvas = p.createCanvas(dimensions.screenWidth, dimensions.screenHeight);
            canvas.id('screenCanvasElement');
            canvas.elt.draggable = false;
            console.log(dimensions);
        };
        
        //Draws each frame of the screen
        p.draw = function() {

            //Called when draw is initialized, only repeated when changing screenImg
            //WORK ON PROGRESS------------------------------------------------------
            if(initNavigation.firstLoad){
                scrollValue.x = screenImg.width/2;
                scrollValue.y = screenImg.height/2;
                console.log(scrollValue);
                limits = calculateLimits(dimensions, screenImg.width, screenImg.height);
                console.log(limits);
                initNavigation.firstLoad = false;
            }

            //logic to move the camera top, down, left, right using keys
            if(p.keyIsPressed){
                console.log('is moved')
                const movement = currentNavigation(limits, moveKeysList, scrollValue);
                scrollValue.x += movement.x;
                scrollValue.y += movement.y;
                console.log(movement);

            }

            
            
            screenImg.position(-scrollValue.x, -scrollValue.y);
            screenImg.style('z-index', '-1');
            
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

            if(p.mouseButton == p.LEFT) leftClick(p.mouseX, p.mouseY, scrollValue, initNavigation);
            
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



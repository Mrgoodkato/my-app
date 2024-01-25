import {createMovementKeyMap, calculateLimits, MkeysManager } from "../controllers/movement.js";
import { FRAMEConstruction } from "../globalValues/navigationValues.js";
import { leftClick } from "../controllers/mouseClick.js";
import { FRAMEnavigator } from "../navigation/navigationLogic.js";

export function createScreen(screenElement){

    //Creating the initial FRAME object with the test folder name:
    const initFRAME = FRAMEConstruction('img-test/test360FRAME/')

    //Keys array to track keys being pressed
    let moveKeysList = [];

    //Zoom level variable
    let zoomLevel = 1;

    //Screen image variable, can change due to src changing due to movement
    let screenRNDR;

    //Limits variable calculated each time a new screenRNDR is generated, used to define the limits of the screen for movement and navigation
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
            console.log(initFRAME.urlFront);
            screenRNDR = p.createImg(initFRAME.frontRNDR.normalTLT, 'normal');
            screenRNDR.elt.draggable = false;
            screenRNDR.elt.style.userSelect = 'none';
            initFRAME.currentRNDR = 'frontRNDR';
            initFRAME.currentTLT = 'normalTLT';

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

            //lOAD FRAME CONDITIONAL------------------------------------------------
            //Called when draw is initialized, only repeated when changing screenRNDR
            if(screenRNDR.width > 0 && initFRAME.firstLoad){
                scrollValue.x = screenRNDR.width/2 - dimensions.screenWidth/2;
                scrollValue.y = screenRNDR.height/2 - dimensions.screenHeight/2;
                console.log(scrollValue);
                limits = calculateLimits(dimensions, screenRNDR.width, screenRNDR.height);
                initFRAME.firstLoad = false;
            }

            //MOVEMENT CONDITIONAL--------------------------------------
            //logic to move the camera top, down, left, right using keys
            if(p.keyIsPressed && !initFRAME.firstLoad){
                const movement = MkeysManager(moveKeysList, 5, limits, scrollValue);

                //NAVIGATION CONDITIONAL-----------------------------------------------
                //Triggers when the limit in the RNDR is reached
                if(movement.dir != 'none' && movement.dir != undefined && movement.dir != null){
                    const navigation = FRAMEnavigator(movement, initFRAME);
                    initFRAME.currentRNDR = navigation[0];
                    initFRAME.currentTLT = navigation[1];
                    screenRNDR.elt.src = initFRAME[navigation[0]][navigation[1]];
                    initFRAME.firstLoad = true;
                }

                scrollValue.x += movement.x;
                scrollValue.y += movement.y;

            }

            screenRNDR.position(-scrollValue.x, -scrollValue.y);
            screenRNDR.style('z-index', '-1');
            
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

            if(p.mouseButton == p.LEFT) leftClick(p.mouseX, p.mouseY, scrollValue, initFRAME);
            
        }

        //WORK ON PROGRESS--------------------------------------------
        //Mouse wheel event that triggers when the mouse wheel is used
        p.mouseWheel = function(e){

            zoomLevel += e.delta / 1000;

            zoomLevel = p.max(zoomLevel, 0.1);
            zoomLevel = p.min(zoomLevel, 1);

        }


    };
  
    return new p5(screen, 'main_screen');

}



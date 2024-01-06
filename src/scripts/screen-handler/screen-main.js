/**
 * Function that works getting the img element and giving it a click event listener to gather coordinate data when a user clicks on any part of the image.
 */
export function coordinateMapping(){

    /**
     * The clientX property in a JavaScript event object represents the horizontal coordinate (X) of the mouse pointer when an event, such as a mouse click or mouse move, occurs. This property is often used with events related to mouse input, like mousemove, mousedown, mouseup, and others.

    The clientX value is expressed in pixels relative to the left edge of the browser's content area (viewport). It does not include the scrollbar, padding, or border of the document.
     */
    const clickOverlay = document.getElementById('click_overlay');

    clickOverlay.addEventListener('click', (event) =>{

        const rect = clickOverlay.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        console.log(`Clicked at (${x}, ${y})`);
        console.log(event.clientX, event.clientY);
        console.log(rect)

    })

}

/**
 * Function that assigns the mousedown and mousemove some logic in order for it to scroll a specific overflown element (img inside the div main_Screen)
 */
export function scrollingView(){

    /**
     * scrollLeft: This property contains the number of pixels that the content of the element is scrolled from its leftmost position. If the content is not        scrolled horizontally, scrollLeft will be 0. If the content is scrolled to the right, scrollLeft will be a positive value.
     */
    const container = document.getElementById('main_screen');
    const mouseHandler = {
        startX: 0,
        startY: 0,
        startScrollLeft: 0,
        startScrollTop: 0,
        isMouseDown: false
    }
    let accelerator = 0;
    let keyDown = true;

    container.addEventListener('mousedown', (event)=>{

        if(event.button === 0){

            mouseHandler.isMouseDown = true;
            mouseHandler.startX = event.clientX;
            mouseHandler.startY = event.clientY;
            mouseHandler.startScrollLeft = container.scrollLeft;
            mouseHandler.startScrollTop = container.scrollTop;

        }

    });

    /**
     * This event listener will continue the animation of the scroll after mouse button has been released with a recursive call to scrollAnimation()
     */
    document.addEventListener('mouseup', (event)=>{

        function scrollAnimation(){
            const deltaX = event.clientX - mouseHandler.startX;
            const deltaY = event.clientY - mouseHandler.startY;
            console.log('Delta X ', deltaX)
            container.scrollLeft = mouseHandler.startScrollLeft - deltaX * accelerator;
            container.scrollTop = mouseHandler.startScrollTop - deltaY * accelerator;
            
            accelerator *= 0.95;

            if(accelerator > 0.1){
                requestAnimationFrame(scrollAnimation);
            }else{
                accelerator = 0;
                mouseHandler.isMouseDown = false;
                keyDown = true;
            }
        }

        scrollAnimation();
        
    });

    document.addEventListener('mousemove', (event)=>{
        
        if(mouseHandler.isMouseDown){

            if(accelerator < 1) accelerator += 0.01;

            keyDown = false;
            const deltaX = event.clientX - mouseHandler.startX;
            const deltaY = event.clientY - mouseHandler.startY;

            container.scrollLeft = mouseHandler.startScrollLeft - deltaX * accelerator;
            container.scrollTop = mouseHandler.startScrollTop - deltaY * accelerator;

        }

    });

    document.addEventListener('keydown', function (event) {
        if(keyDown){
            switch (event.key) {
                case 'w':
                  container.scrollTop -= 10;
                  break;
                case 'a':
                  container.scrollLeft -= 10;
                  break;
                case 's':
                  container.scrollTop += 10;
                  break;
                case 'd':
                  container.scrollLeft += 10;
                  break;
                default:
                  break;
              }
        }
        
    });

}
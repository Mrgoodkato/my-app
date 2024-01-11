export function leftClick(mouseX, mouseY, scrollValue, navigationState){

    const pos = {
        x: mouseX + scrollValue.x,
        y: mouseY + scrollValue.y
    }

    console.log('Position:', pos.x, pos.y);
    console.log(navigationState.triggers[0])

    if(pos.x < navigationState.triggers[0].xMax && pos.x > navigationState.triggers[0].xMin) {
        console.log('trigger')
    }

}
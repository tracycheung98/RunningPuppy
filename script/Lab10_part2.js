var topPosition = 100;
var leftPosition = -200;

function runPuppy() {
    var puppy = document.getElementById("puppy");
    puppy.style.visibility = "visible";
    puppy.style.position="absolute";
    // add if it reaches the screen end (you can check with screen.availwidth)
    if (leftPosition != window.screen.availWidth){
        leftPosition += 10;
        puppy.style.left = leftPosition + "px";
        topPosition +=5;
        puppy.style.top = topPosition + "px";
        if(leftPosition > (window.screen.availWidth-100) || topPosition > (window.screen.availHeight-100)){
            leftPosition = -200;
            topPosition = 100;
        }
    }
}
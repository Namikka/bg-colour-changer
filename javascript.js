function colourChanger(event) {
	// Let's initialize some variables.
	var centerPoint = [parseInt(window.innerWidth / 2, 10), parseInt(window.innerHeight / 2, 10)];
	var cssString = "";

	//console.group("DEBUGGING INFO");
	//console.groupEnd();

	/**
	* What we're looking for when clicking on the center is 
	* linear-gradient(to right, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee)
	**/

	// Using screen X and Y were way off so clientY and clientX it is.
	if (centerPoint[0] == event.clientX && centerPoint[1] == event.clientY) {
		cssString = "#ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee";
	} else {
		for (var i = 1; i < 8; i++) {
			// To generate different colours, we need some math.
			var firstMathY = parseInt(centerPoint[0] * (event.clientY * i) / 255) / 16;
			var firstMathX = parseInt(centerPoint[1] * (event.clientX * i) / 255) / 16;
			var secondMathY = (firstMathY < 255) ? parseInt(firstMathY, 10) : parseInt(firstMathY / 2, 10);
			var secondMathX = (firstMathX < 255) ? parseInt(firstMathX, 10) : parseInt(firstMathX / 2, 10);
			var hexValue = (i < 7) ? "#" + secondMathY.toString(16).toUpperCase() + secondMathX.toString(16).toUpperCase() + ", " : "#" + secondMathY.toString(16).toUpperCase() + secondMathX.toString(16).toUpperCase();
			cssString = cssString + hexValue;
		}
	}
	
	var backgroundGradient = "linear-gradient(to right, " + cssString +")";
	document.getElementsByTagName("body")[0].style.background = backgroundGradient;
}
document.getElementById("center").style.position = "absolute";
document.getElementById("center").style.width = "2px";
document.getElementById("center").style.height = "2px";
document.getElementById("center").style.background = "red";
document.getElementById("center").style.top = "50%";
document.getElementById("center").style.left = "50%";
document.getElementById("center").style.right = "auto";
document.getElementById("center").style.bottom = "auto"; 

window.addEventListener("click", colourChanger);
//window.addEventListener("mousemove", colourChanger);
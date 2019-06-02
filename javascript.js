function colourChanger(event) {
	// Using screen X and Y here because this is screen based and
	// I'll change it if it sucks.
	//console.group("DEBUGGING INFO");
	//console.log("event.screenX : ", event.screenX);
	//console.log("event.screenY : ", event.screenY);
	//console.groupEnd();
	/**
	* What we're looking for is 
	* linear-gradient(to right, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee)
	**/

	// Let's initialize some variables.
	var centerPoint = [parseInt(window.innerWidth / 2, 10), parseInt(window.innerHeight / 2, 10)];
	var cssString = "";
	// My first plan is to use hexes here because I kinda like them.
	for (var i = 1; i < 8; i++) {
		// To generate different colours, we need some math.
		var firstMathY = parseInt(centerPoint[0] * (event.screenY * i) / 255) / 16;
		var firstMathX = parseInt(centerPoint[1] * (event.screenX * i) / 255) / 16;
		var secondMathY = (firstMathY < 255) ? parseInt(firstMathY, 10) : parseInt(firstMathY / 2, 10);
		var secondMathX = (firstMathX < 255) ? parseInt(firstMathX, 10) : parseInt(firstMathX / 2, 10); 
		var hexValue = (i < 7) ? "#" + secondMathY.toString(16).toUpperCase() + secondMathX.toString(16).toUpperCase() + ", " : "#" + secondMathY.toString(16).toUpperCase() + secondMathX.toString(16).toUpperCase();
		cssString = cssString + hexValue;
	}
	//console.log("cssString = ", cssString);
	var backgroundGradient = "linear-gradient(to right, " + cssString +")";
	document.getElementById("body").style.background = backgroundGradient;
}

window.addEventListener("mousemove", colourChanger);
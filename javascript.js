function colourChanger(event) {
	// Using screen X and Y here because this is screen based and
	// I'll change it if it sucks.
	console.group("DEBUGGING INFO");
	console.log("event.screenX : ", event.screenX);
	console.log("event.screenY : ", event.screenY);
	console.groupEnd();
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

		var y = 20 * i;//(event.screenY * i) / 255;
		var x = 20 * i;//(event.screenX * i) / 255;

		console.log(parseInt(centerPoint[0] * (event.screenY * i) / 255) / 16);
		console.log(parseInt(centerPoint[1] * (event.screenX * i) / 255) / 16);

		var hexValue = (i < 7) ? "#" + y.toString(16).toUpperCase() + x.toString(16).toUpperCase() + ", " : "#" + y.toString(16).toUpperCase() + x.toString(16).toUpperCase();
		cssString = cssString + hexValue;
	}
	console.log("cssString = ", cssString);
	var backgroundGradient = "linear-gradient(to right, " + cssString +")";
	document.getElementById("body").style.background = backgroundGradient;
}

 window.addEventListener("click", colourChanger);
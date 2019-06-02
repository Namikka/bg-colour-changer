function colourChanger(event) {
	//window.innerWidth;
	//window.innerHeight;
	// Using screen X and Y here because this is screen based and
	// I'll change it if it sucks donkey dicks.
	//event.screenX, event.screenY
	console.group("DEBUGGING INFO");
	console.log("event.screenX : ", event.screenX);
	console.log("event.screenY : ", event.screenY);
	console.groupEnd();
	/**
	* What we're looking for is 
	* linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)
	**/

	// Let's initialize some variables.
	var red = 0,
		green = 0,
		blue = 0;
	// And the dimensions we have..
	var centerPoint = [parseInt(window.innerWidth / 2, 10), parseInt(window.innerHeight / 2, 10)];
	var cssString = "";
	// My first plan is to use hexes here because I kinda like them.
	for (var i = 0; i < 7; i++) {
		//var hex = ""
		//console.log("X : ", event.screenY.toString(16).toUpperCase());
		//console.log("Y : ", event.screenX.toString(16).toUpperCase());
		var hexValue = (i < 6) ? "#" + event.screenY.toString(16).toUpperCase() + event.screenX.toString(16).toUpperCase() + ", " : "#" + event.screenY.toString(16).toUpperCase() + event.screenX.toString(16).toUpperCase();
		cssString = cssString + hexValue;
	}
	console.log("cssString = ", cssString);
	var backgroundGradient = "linear-gradient(to right, " + cssString +")";
	document.getElementById("body").style.background = backgroundGradient;
}

 window.addEventListener("click", colourChanger);
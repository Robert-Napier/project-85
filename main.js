//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
gwidth = 75;
gheight = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
gx = 5;
gy = 225;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image 
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
	background_imgTag.src = background_image; // load image
	greencar_imgTag = new Image(); //defining a variable with a new image 
	greencar_imgTag.onload = uploadgreencar; // setting a function, onloading this variable 
	greencar_imgTag.src = greencar_image; // load image
}


function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, gx, gy, 75, 100);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	//Define function to move the car upward
	if (gy >= 0) {
		gy = gy - 10;
		console.log("When up arrow is pressed, x = " + gx + " | y = " + gy);
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	//Define function to move the car downward
	if (gy <= 350) {
		gy = gy + 10;
		console.log("When down arrow is pressed, x = " + gx + " | y = " + gy);
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	//Define function to move the car left side
	if (gx >= 0) {
		gx = gx - 10;
		console.log("When left arrow is pressed, x = " + gx + " | y = " + gy);
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	//Define function to move the car right side
	if (gx <= 750) {
		gx = gx + 10;
		console.log("When right arrow is pressed, x = " + gx + " | y = " + gy);
		uploadBackground();
		uploadgreencar();
	}
}
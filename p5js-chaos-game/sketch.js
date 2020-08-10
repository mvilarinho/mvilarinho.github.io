var pointA;
var pointB;
var pointC;
var colorA;
var colorB;
var colorC;
var d;
var dice;
var run = false;
var count = 0;
var fpsSlider;
var fpsLabel;
var fps = 30;
var fpsValue = fps;


// New Features:
//	1- Make random vertex of initial triangle. 
//  2- Set one random color for each vertex and paint each point with that color. 
//	3- Set color in labels.
//  4- Color status info with the color of random point.

function setup() {
	var myCanvas = createCanvas(innerHeight-110,innerHeight-110);
	myCanvas.parent('game');
	myCanvas.position(innerWidth/2-width/2,50);
	background(20);
	stroke(255);
	frameRate(fps);

	//Create Triangle
	var Ax=floor(random() * width-10)+10; 
	var Ay=floor(random() * height-10)+10;  
	pointA = createVector(Ax, Ay);

	var Bx=floor(random() * width-10)+10; 
	var By=floor(random() * height-10)+10; 
	pointB = createVector(Bx, By);

	var Cx=floor(random() * width-10)+10; 
	var Cy=floor(random() * height-10)+10; 
	pointC = createVector(Cx, Cy);

	//Set Random Colors, avoiding black
	pointA.color=color(10+random(245),10+random(245),10+random(245))
	pointB.color=color(10+random(245),10+random(245),10+random(245))
	pointC.color=color(10+random(245),10+random(245),10+random(245))
	
	// Draw Triangle
	strokeWeight(8);
	stroke(pointA.color)
	point(pointA.x, pointA.y);
	stroke(pointB.color)
	point(pointB.x, pointB.y);
	stroke(pointC.color)
	point(pointC.x, pointC.y);

	// Text around Triangle
	noStroke();
	textSize(24);
	fill(pointA.color);
	text("A", Ax-8, Ay-10);
	fill(pointB.color);
	text("B", Bx-8, By-10);
	fill(pointC.color);
	text("C", Cx-8, Cy-10);
	stroke(255);

	// Slider
	fpsLabel = createP(fpsValue);
	fpsLabel.style("color", "white");
	fpsSlider = createSlider(4,60,fps,2);
	fpsSlider.style('width', '160px');
	fpsLabel.style('font-size', 'small');
	// Make new Dice
	dice = new Dice;
	d = new Dot;

	// Status info
	countLabel = select('#counter');
	countLabel.html(nf(count,6,0));
	diceLabel = select('#dice');
	diceLabel.html("-");
	startBtn = select('#start');
	startBtn.position(innerWidth/2-60, 10);
	startBtn.mousePressed(toggleRun);
	restartBtn = select('#restart');
	restartBtn.position(innerWidth/2, 10);
	restartBtn.mousePressed(restartGame);
	fpsSlider.parent("slider");
	fpsLabel.parent("sliderLabel");
	
}

function draw() {
  //Make new Dot;
  		var fps = fpsSlider.value();
  		frameRate(fps);
  		fpsLabel.html(fps + " fps");


  		if (run == true) {
			  
			d.display();
			pointRandom=dice.choice();
			d.halfway(pointRandom);
			count++;
			countLabel.html(nf(count,6,0));
			diceLabel.style('background-color',pointRandom.color);
			diceLabel.html(dice.selected);
  		}
}

function toggleRun() {
	run = !run;
	if (run) {
		startBtn.class("btn btn-danger text-center");
		startBtn.html("Stop");
		diceLabel.html(dice.selected);
	}
	if (!run) {
		startBtn.class("btn btn-success text-center");
		startBtn.html("Start");
		diceLabel.html("-");
	}

}

function restartGame() {
	location.reload();
}

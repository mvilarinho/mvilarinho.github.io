var d;
var dice;
var run = false;
var count = 0;
var fpsSlider;
var fpsLabel;
var stepSlider;
var stepLabel;
var fps = 30;
var fpsValue = fps;
var stepValue = 5;



function setup() {
	//var myCanvas = createCanvas(innerHeight-110,innerHeight-110);
	var myCanvas = createCanvas(innerWidth,innerHeight-50);
	myCanvas.parent('game');
	//myCanvas.position(innerWidth/2-width/2,50);
	myCanvas.position(0,50);
	myCanvas.pos
	background(20);
	stroke(255);
	frameRate(fps);

	// fpsSlider
	fpsLabel = createP(fpsValue);
	fpsLabel.style("color", "white");
	fpsLabel.style("font-size", "small");
	fpsSlider = createSlider(2,60,fps,2);
	fpsSlider.style('width', '140px');

	//stepSlider
	stepLabel = createP(stepValue);
	stepLabel.style("color", "white");
	stepLabel.style("font-size", "small");
	stepSlider = createSlider(1,20,stepValue,1);
	stepSlider.style('width', '140px');

	// Initial Point
	point(width/2,height/2);
	// Make new Dice
	dice = new Dice;
	d = new Dot;

	// Status info
	countLabel = select('#counter');
	countLabel.html(nf(count,6,0));
	diceLabel = select('#dice');
	diceLabel.html("-");
	startBtn = select('#start');
	startBtn.position(innerWidth/2-60, 10)
	startBtn.mousePressed(toggleRun);
	restartBtn = select('#restart');
	restartBtn.position(innerWidth/2, 10)
	restartBtn.mousePressed(restartGame);
	fpsSlider.parent("slider");
	fpsLabel.parent("sliderLabel");
	stepSlider.parent("stepslider");
	stepLabel.parent("stepsliderLabel");
}

function draw() {
  //Make new Dot;
  		var fps = fpsSlider.value();
  		frameRate(fps);
  		fpsLabel.html(fps + " fps");

		var N=stepSlider.value();
		stepLabel.html(N+" steps")

  		if (run == true) {
			
			
			d.display();
			vectorRandom=dice.choice(N);
			d.step(vectorRandom);
			count++;
			countLabel.html(nf(count,4,0));
			diceLabel.style('background-color',vectorRandom.color);
			diceLabel.html(dice.dir);
  		}
}

function toggleRun() {
	run = !run;
	if (run) {
		startBtn.class("btn btn-danger text-center");
		startBtn.html("Stop");
		diceLabel.html(dice.dir);
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

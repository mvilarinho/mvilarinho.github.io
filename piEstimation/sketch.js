var run = false;
var count = 0;
var alvo = 0;
var plot;
var points = [];
var pointsPI = [];


function setup() {

	createCanvas(innerWidth, innerHeight - 120);
	lado = min(innerWidth, innerHeight) * 0.75
	background(220);
	fill(255, 255, 255);

	rect((innerWidth - lado) / 2, height / 16, lado, lado);
	center = createVector((innerWidth - lado) / 2 + lado / 2, height / 16 + lado / 2);
	strokeWeight(2);
	stroke(0);
	diametro = lado;
	ellipse(center.x, center.y, diametro, diametro);
	strokeWeight(1);
	point(center.x, center.y);

		//Estimation Chart

	// Create a new plot and set its position on the screen
	plot = new GPlot(this);
	plot.setPos(25, 25);
	//plot.setPointColor=
	plot.setPointSize(1);
	// Set the plot title and the axis labels

	plot.getXAxis().setAxisLabelText("Shots");
	plot.getYAxis().setAxisLabelText("Estimation");
	plot.setTitleText("Aproximation of π");
	

	// Status info
	countLabel = select('#counter');
	countLabel.html(nf(count, 6, 0));
	estLabel = select('#estimacion');
	estLabel.html("-");
	erroLabel = select('#erro');
	erroLabel.html("-");
	startBtn = select('#start');
	startBtn.position(innerWidth / 2 - 60, 10)
	startBtn.mousePressed(toggleRun);
	restartBtn = select('#restart');
	restartBtn.position(innerWidth / 2, 10)
	restartBtn.mousePressed(restartGame);

}

function draw() {

	

	strokeWeight(2);
	if (run == true) {
		for (let i = 0; i < 100; i++) {
			count++;
			shot = createVector((innerWidth - lado) / 2 + random(lado), height / 16 + random(lado));
			d = dist(center.x, center.y, shot.x, shot.y);
			if (d < diametro / 2) {
				stroke(255, 0, 0);
				alvo++;
			}
			else {
				stroke(0, 173, 238);
			}
			point(shot.x, shot.y);
			countLabel.html(nf(count, 6, 0));
			est = alvo * 4 / count;
			estLabel.html(nf(est, 1, 6));
			erro = abs((est - PI) / PI) * 100;
			erroLabel.html(nf(erro, 2, 2) + "%");
			// Prepare the points for the plot
			points[count - 1] = new GPoint(count, est);
			pointsPI[count - 1] = new GPoint(count, PI);
		}
		plot.setPoints(points);

		// Draw it!
		plot.defaultDraw();


	}
}


function toggleRun() {
	run = !run;
	if (run) {
		startBtn.class("btn btn-danger text-center");
		startBtn.html("Stop");
	}
	if (!run) {
		startBtn.class("btn btn-success text-center");
		startBtn.html("Start");
	}

}

function restartGame() {
	location.reload();
}


//code train video: https://www.youtube.com/watch?v=4066MndcyCk
var count = 0;
var NSlider; //Slider for seeds
var NLabel;
var nSlider; //Slider for n-th distance
var nLabel;
var BSlider; //Slider for Bright
var BLabel;
var RSlider; //Slider for Ratio
var RLabel;
var PSlider; //Slider for Palette
var PLabel;


var seedPoints = [];
var canvasSize = 200;
var chkcolor;
var chkdual;
var N = 7; // # seed points
var n = 0; // n-value for worley noise
var B = 5; // initial bright 0-10
var R = 50; // ratio value
var P = 1; // Palette option





function setup() {

	var posx = (innerWidth - canvasSize) / 2;
	var posy = (innerHeight - canvasSize) / 2;

	var myCanvas = createCanvas(canvasSize, canvasSize);
	myCanvas.parent('game');
	myCanvas.position(posx, posy);

	//generate seed points
	for (var i = 0; i < N; i++) {
		seedPoints[i] = createVector(ceil(random(width)), ceil(random(height)));
	}

	//noLoop();

	// NSlider
	NLabel = createP(N);
	NLabel.style("color", "white");
	NLabel.style("font-size", "small");
	NSlider = createSlider(5, 100, N, 5);
	NSlider.style('width', '100px');

	//nSlider
	nLabel = createP(n);
	nLabel.style("color", "white");
	nLabel.style("font-size", "small");
	nSlider = createSlider(1, 5, n, 1);
	nSlider.style('width', '100px');

	//BSlider
	BLabel = createP(B);
	BLabel.style("color", "white");
	BLabel.style("font-size", "small");
	BSlider = createSlider(0, 10, B, 1);
	NSlider.style('width', '100px');

	//RSlider
	RLabel = createP(R);
	RLabel.style("color", "white");
	RLabel.style("font-size", "small");
	RSlider = createSlider(10, width, R, 10);
	RSlider.style('width', '100px');

	//PSlider
	PLabel = createP(P);
	PLabel.style("color", "white");
	PLabel.style("font-size", "small");
	PSlider = createSlider(1, 6, P, 1);
	PSlider.style('width', '100px');

	//color
	chkcolor = select('#color');
	chkcolor.value(false);

	//dual
	chkdual = select('#dual');
	chkdual.value(false);

	// Status info
	NSlider.parent("Nslider");
	NLabel.parent("NsliderLabel");
	nSlider.parent("nslider");
	nLabel.parent("nsliderLabel");
	BSlider.parent("Bslider");
	BLabel.parent("RsliderLabel");
	RSlider.parent("Bslider");
	RLabel.parent("RsliderLabel");
	PSlider.parent("pslider");
	PLabel.parent("psliderLabel");

}

function draw() {

		//generate seed points
	if (NSlider.value() != N) {
		N = NSlider.value();
		for (var i = 0; i < N; i++) {
			seedPoints[i] = createVector(ceil(random(width)), ceil(random(height)));
		}

	}

	//For each pixel, calculate distance to seed points
	var d = [];
	for (var i = 0; i < N; i++) {
		seedPoints[i].x += random(-10, 10);
		seedPoints[i].y += random(-10, 10);
	}

	for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
			for (var i = 0; i < N; i++) {
				d[i] = dist(x, y, seedPoints[i].x, seedPoints[i].y)
			}
			var sorted = sort(d);
			if (chkcolor.checked()) {
				if (chkdual.checked()) {
					var r = map(sorted[n], 0, R, 255 * B / 10, 0);
					var g = map(sorted[n + 1], 0, R, 255 * B / 10, 0);
					var b = map(sorted[n + 2], 0, R, 255 * B / 10, 0);
				} else {
					var r = map(sorted[n], 0, R, 0, 255 * B / 10);
					var g = map(sorted[n + 1], 0, R, 0, 255 * B / 10);
					var b = map(sorted[n + 2], 0, R, 0, 255 * B / 10);
				}
				stroke(getPalette(P, r, g, b));
			} else {
				if (chkdual.checked()) {
					var noise = map(sorted[n], 0, R, 0, 255 * B / 10);
				} else {
					var noise = map(sorted[n], 0, R, 255 * B / 10, 0);
				}
				stroke(noise);
			}
			vector = createVector(x, y);
			point(vector.x, vector.y);
		}
	}
	// show seed points
	//stroke(0, 255, 0);
	//strokeWeight(5);
	//for (var i = 0; i < N; i++) {
	//point(seedPoints[i].x, seedPoints[i].y);
	//}

	n = nSlider.value() - 1
	B = BSlider.value();
	R = RSlider.value();
	P = PSlider.value();
	NLabel.html(N + " seed points");
	nLabel.html(nSlider.value() + " nth distance");
	BLabel.html("Bright " + B + "0%");
	RLabel.html("Radius " + R + "px");
	PLabel.html("Palette " + P);

}


function getPalette(k, r, g, b) {

	switch (k) {
		case 2:
			return color(g, r, b);
			break;
		case 3:
			return color(g, b, r);
			break;
		case 4:
			return color(b, g, r);
			break;
		case 5:
			return color(b, r, g);
			break;
		case 6:
			return color(r, b, g);
			break;
		default:
			return color(r, g, b);
	}
}
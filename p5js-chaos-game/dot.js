function Dot() {
	strokeWeight(2);
	//this.dots = [];
	this.cor=color(0,0,0)
	this.pos = createVector(floor(random(width)), floor(random(height)));
	//this.dots.push(this.pos);

	this.display = function() {
		//for (i = 0; i < this.dots.length; i++) {
			stroke(this.cor)
			point(this.pos.x, this.pos.y);
		//}
		
	}

	this.halfway = function(vector) {
		var nextVector = p5.Vector.add(vector, this.pos);
		this.pos = nextVector.mult(0.5);
		this.cor=vector.color;
		//this.dots.push(this.pos);
	}
}
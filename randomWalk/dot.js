function Dot() {
	strokeWeight(2);
	this.cor=color(10+random(245),10+random(245),10+random(245))
	this.pos = createVector(width/2,height/2);

	this.display = function() {
			stroke(this.cor)
			point(this.pos.x, this.pos.y);
		
	}

	this.step = function(vector) {
		
		this.nextVector = p5.Vector.add(vector, this.pos);
		
		var oldPos=this.pos;
		this.pos=this.nextVector.mult(1);
		var boo= (this.pos.x >= 0) && (this.pos.x <= width)
		boo= boo && (this.pos.y >= 0) && (this.pos.y <= height)
		if(Boolean(boo)) {	 //control border of canvas
		}
		else {
			this.pos=oldPos;
		}
		this.cor=vector.color;
	}
}
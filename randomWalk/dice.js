function Dice() {
	this.sides = 4;
	this.selected;
	this.dir;
	this.roll = function() {
		return ceil(random(this.sides));

	}

	this.show = function() {
		// Show the dice face code
	}
	this.choice = function(step) {
		var v;
		c = this.roll();
		this.selected = c;
		switch(c) {
			case 1:
			  v=createVector(1,0);
			  this.dir="⇨";
			  break;
			case 2:
				v=createVector(0,1);
				this.dir="⇩";
			  break;
			case 3:
			  v=createVector(-1,0);
			  this.dir="⇦";
			  break;
			case 4:
				v=createVector(0,-1);
				this.dir="⇧";
			  break;			  
			default:
		  }
		 v=v.mult(step);
		  v.color=color(10+random(245),10+random(245),10+random(245));
		return v;

	}
}
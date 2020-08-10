function Dice() {
	this.sides = 6;
	this.selected;
	this.roll = function() {
		return ceil(random(this.sides));

	}

	this.show = function() {
		// Show the dice face code
	}
	this.choice = function() {
		c = this.roll();
		this.selected = c;
		if (c == 1 || c == 2) {
			return pointA;
		}
		if (c == 3 || c == 4) {
			return pointB;
		}
		if (c == 5 || c == 6) {
			return pointC;
		}

	}
}
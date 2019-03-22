class Box {
	constructor(x, y, w, m, v) {
		this.x = x
		this.y = y
		this.w = w
		this.m = m
		this.v = v
	}
	
	show() {
		fill(120, 66, 158)
		rect(this.x, this.y, this.w, this.w)	
	}
	
	update() {
		this.x += this.v
	}
	
	bounce(other) {
		let sumM = this.m + other.m
		let newV = (this.m - other.m)/sumM * this.v
		
		newV += (2*other.m/sumM)*other.v
		return newV;
	}
	
	collide(other) {
		return !(this.x + this.w < other.x ||
				this.x > other.x + other.w)
	}
	
	reverse() {
		this.v = -this.v	
	}
	
	hitWall() {
		return this.x <= 0
	}
}
var boxA
var boxB
var count
var digits
var timeSteps

function setup() {
	createCanvas(600, 400);
	digits = prompt('Enter the number of digits of PI' +
		   '(0 - 7 is the best range)', 2)
	
	timeSteps = pow(10, digits-1)
	boxA = new Box(20, 150 - 30, 30, 1, 0);
	boxB = new Box(100, 150 - 75, 75, pow(100, digits-1), -5/timeSteps);
	count = 0
	textSize(30)
}

function draw() {
	background(252);
	fill(105, 239, 168)
	rect(0, 0, width, 150)
	
	for(let i = 0; i < timeSteps; i++) {
		if(boxA.collide(boxB)) {
			const v1 = boxA.bounce(boxB)
			const v2 = boxB.bounce(boxA)
			boxA.v = v1
			boxB.v = v2
			count++
		}
		if(boxA.hitWall()) {
			boxA.reverse()
			count++
		}

		boxA.update()
		boxB.update()	
	}
	boxA.show()
	boxB.show()
	
	fill(0)
	text("Digits: " + digits, 0, 180)
	text("Collisions: " + count, 0, 220)
	text("PI (Reference): 3.1415926535897...", 0, 270)
}
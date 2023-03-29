shapeX = 40;
shapeY = 40

let color = ["red", "orange", "black"];

function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  for (let shapes = 0; shapes < 15; shapes++) {
    fill(random(color));
    ellipse(shapeX, shapeY, 40);
    shapeX += 40;
    shapeY += 40;
  }
}


shapeX = 0
shapeY = 0
offset = 50 

function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  
  for (let shapes = 0; shapes < 8; shapes++){
    rect(shapeX, shapeY, 50)
    shapeX += 50 
}
  for (let shapes = 0; shapes < 8; shapes++){
    rect(shapeX, shapeY, 50)
    shapeY += 50 
  }
  
  
  
  
  
}

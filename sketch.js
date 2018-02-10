var xLocation= 100;
var yLocation= 100;

function setup() {
  createCanvas(600, 600);
}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    xLocation = xLocation + 100;
  }
}
function draw() {
  //green background
  background(0 ,255 ,0);
  // red fill
  fill(255 ,0 ,0);
  //edge
  stroke(0 ,0, 255)
  //increase edge size
  strokeWeight(4);
  //draw ellispse
    ellipse(xLocation, yLocation, 50, 50);
  }

function setup() {
  createCanvas(windowWidth-16, windowHeight-16);
  background(220);
}

function draw() {
  ellipse(10,10,10,10);
  fill(0, 204, 255);
  ellipse(mouseX,mouseY,10,10);
  ellipse(width/2,height/2,10,10);
  fill(255, 204, 0);
  for ( let y = 20 ; y < height ; y+=30 ) {
    for ( let i = 20 ; i < width ; i+=30 ) {
      ellipse( i, y, 20, 20);
    }
  }
}

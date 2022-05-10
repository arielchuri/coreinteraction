[p5js.org](https://p5js.org/)


``` javascript
var circleVar;
var myHeight;
var myWidth;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  circleVar = random(10,80);
  fill(map(circleVar,10,80,0,240),200)
  stroke(0);
  myY = (random(height));
  myX = (random(width));
  circle(myX,myY,circleVar);
  fill(255);
  noStroke();
  circle(myX-(circleVar/5),myY-(circleVar/5),circleVar/4);
}
```

``` javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(random(0,255),random(0,255),random(0,255))
  line(random(0,width), 0, random(0,width), height);
  noStroke();
  ellipse(mouseX,mouseY,40,40);
}
```

``` javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  ellipse(20,20,20,20);
  fill(255, 204, 0);
  for ( let y = 20 ; y < height ; y+=60 ) {
    for ( let i = 20 ; i < width ; i+=60 ) {
      stroke(255); 
      fill(255, 100, 80);
      rect(i-20, y-15, 40, 40);
      fill(255);
      ellipse( i-20, y-20, 40, 40);
      stroke(0)
      line(i-10,y-10,i+20,y+20);
      fill(255, 204, 0);
      ellipse( i, y, 20, 20);
      fill(100, 200, 200);
      arc(i, y, 30, 30, 0, PI + QUARTER_PI, CHORD);
      fill(255);
      noStroke();
      ellipse( i-5, y+6, 6, 6);
        describe('white open arc with black outline with top right missing');
    }
  }
}

function draw() {
}
```


``` javascript
var circleVar;
var myHeight;
var myWidth;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255,2);
  circleVar = random(5,40);
  fill(map(circleVar,5,40,0,240),random(0,255),random(0,255),200)
  stroke(0);
  myY = (mouseY+random(-50,50));
  myX = (mouseX+random(-50,50));
  circle(myX,myY,circleVar);
  fill(255);
  noStroke();
  circle(myX-(circleVar/5),myY-(circleVar/5),circleVar/4);
}
```

``` javascript
var circleX = 0;
var circleSpeed = 5;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,20);
  noStroke();
  fill(255,128,128);
  circleX = circleX + circleSpeed;
  if (circleX > width-20) {
    //circleX = -20;
    circleSpeed = -5;
  }
  if (circleX < 20) {
    circleSpeed = 5;
  }
  circle(circleX,height/2,40);
}
```

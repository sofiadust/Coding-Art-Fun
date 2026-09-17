let x, y, d;

function setup() {
  createCanvas(windowWidth, windowHeight);

  a = 0
  x = 0;          // assigned once
  y = height / 2;
  d = 100;
  f= 100;
}

function draw() {
  background(0, 100, 0, 10);

  //move
  x += 5;
  y += .01;


  if (x > width) {
    x = 0;
  }

  //colors
  
  if (x < width / 2)
    {fill('orange');} 

  if (x < width /4)
    {fill('red');}
  
  if (x > width/ 2)  
    {fill('yellow');}

  triangle(x, y, d, f);

  
   for (let i = 0; i < 100; i++) {
   if (x < width / 2)
    {fill('lime');} 

  if (x < width /4)
    {fill('orange');}
  
  if (x > width/ 2)  
    {fill('lime');}
    circle(40 * i + 20, 200, 30);}

   a += .5;

  
  if (a > width) {
    a = 0;
  }

  // the if/else decides the color, based on which half of the canvas x is in
  if (a < width / 2) {
    fill('orange');
  } else {
    fill('yellow');
  }

  circle(a, y, d);
}
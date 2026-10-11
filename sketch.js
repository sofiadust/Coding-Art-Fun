let unitW;
let unitH;
let angle;
let angle2;
let RotSpeed1;
let RotSpeed2;
let RotSpeed3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode (DEGREES); //0 to 360

  //doin stuuuf
  unitW = width/8
  unitH = width/8
  angle = 45;
  angle2 = 90;
  RotSpeed1 = random(5,100);
  RotSpeed2 = random(.5,10)
  RotSpeed3 = .001
}

function draw() 

{
  background(166, 146, 36);
  
  //console.log(angle);
  

    //from here on to be in new position

push();
  
  noFill();
  strokeWeight(15);
  stroke(1) 
  
  translate(width/2, height/2)
  //where the shape rotates, center of canvas (center is now 0,0) 
rectMode(CENTER)
  fill('red')
  rotate(angle)
  rect(0,0,200,200);

  angle += RotSpeed1;

  
pop();
  
  //canvas in original position
  
 //red outside square
  noFill();
  strokeWeight(1);
  stroke(1) 
  
  translate(width/2, height/2)
  //where the shape rotates, center of canvas (center is now 0,0) 
rectMode(CENTER)
  fill('white')
  rotate(angle)
  rect(0,0,200,200);

  angle += RotSpeed2;

//blue
  
  translate(width/3, height/3)
  fill('blue')
  rotate(45)
  rect(0,0,50,200)

  //canvas back to the original position


  //YELLOW CIRCLE
  pop();

  ellipseMode(width/4,height/4)
  
  translate(width/2, height/2)
  
  fill('yellow')

  let circSize = unitH*1.5;
  
  circle(0,0,circSize);
  rotate(angle2);

    angle2 += RotSpeed3;

  
  push();
}
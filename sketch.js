let x,y,d; 
let colorPalette = ['#FFF600', '#FF9900', '#FF4000', '#B3FF00', '#0C6B0C', '#118F5D', '#3DD196', '#3DD1C0', '#C290FC', '#FC90F8', '#FF30F7','#CF17A7', '#CF175A', '#FA204C']
let spacing;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  x= width/2;
  y= height/2;
  d= width/2;
  numCircles = 20
  
spacing = d/numCircles
  
}

function draw() 
{
  background(0);
  
d= width/2

  for(i=0; i< numCircles; i++)
    {
      fill(colorPalette [i % colorPalette.length])
      //fill(colorPalette [i % colorPalette.length]
//get all the colors!?! with i
      
         circle(x,y,d);
      d = d-25
      // -10 -20 -30 Making loop 10 pixels smallers than previous one
 
    }




  
}
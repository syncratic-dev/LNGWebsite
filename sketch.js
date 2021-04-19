let j;         // JUMPER
let js = 30;   // JUMPER SIZE
const g = 0.1; // GRAVITY
let c;         // CONTROLLER 

const cX = 200; //CONTROLLER LOCATIONS 
const cY = 700; // ^ 

function touchStarted()
{
  if ((dist(mouseX, mouseY, cX, cY) <= js))
  {
    //console.log("Clicked!"); 
    c.isGrabbed = true; 
  }
  return false;
}

function touchEnded()
{
  if (c.isGrabbed)
  {
    translate(200, 700); 
    c.isGrabbed = false;  
    let newVel; 
    mouseLoc = new p5.Vector(min(90, (mouseX - 200)), min(90, (mouseY - 700)));
  
   // console.log("Subtracting ML " + mouseLoc + " and CL " + circlLoc); 
    console.log(mouseLoc); 
    j.addVelocity(mouseLoc); 
    translate(0,0);
  } 
  return false; 
}

function setup() {
    createCanvas(400, 800);
    let startingPos = createVector(200,550); 
    let startingV = createVector(0, 0); // (0, -10)

    j =  new Jumper(startingPos, js, startingV); 
    c = new Controller(cX, cY, 20, 180); 
    strokeWeight(3); 
  }
  
  function draw() {
    background(220);
    stroke(0); 
    line(0, 600, 400, 600); 

    j.update(); 
    j.show(); 
    c.show(); 
  }
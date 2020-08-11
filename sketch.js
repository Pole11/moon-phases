// x and y to calculate the coordinates of the moon
let x = 0;
let y = 0;

// 1 is the earth and 2 is the moon
// d is the diameter 
// a is the angle bewtween the center of the moon and the center of the earth
let d1 = 200;
let d2 = 80;
let a = 0;

var c;

function setup() {
  // it runs only one time
  c = createCanvas(900, 600);
  angleMode(RADIANS);
 
}

function draw() {
  // it's a while loop
  background(0,25,25,255);
  
  noStroke();
  ellipseMode(CENTER);
  
  // earth
  let earthx = width/2 - width/6;
  let earthy = height/2;
  fill(255,255,75,255);
  arc(earthx, earthy, d1, d1, PI/2, 3 * PI/2);
  
  // moon
  a -= 0.01;    
  if (a < -(2 * Math.PI)) {
    a = 0;
  }
    
  x = Math.cos(a) * d1/2 * 5/2;
  y = Math.sin(a) * d1/2 * 5/2;
  
  let moonx = x + earthx;
  let moony = y + earthy;
  fill(255,255,75,255);
  arc(moonx, moony, d2, d2, PI/2, 3 * PI/2);
  
  stroke(255,0,255);
  line(moonx + (d2) * Math.cos(a + Math.PI/2), moony + (d2) * Math.sin(a + Math.PI/2), moonx - (d2)  * Math.cos(a + Math.PI/2), moony - (d2)* Math.sin(a + Math.PI/2));

  // view trajectory
  line(earthx + Math.cos(a) * d1/2, earthy + Math.sin(a) * d1/2, moonx - Math.cos(a) * d2/2, moony - Math.sin(a) * d2/2);
  
  // separation line
  line(width/2 + width/6, 0, width/2 + width/6, height);
  
  // moon pahases
  noStroke();
  let phasex = width - width/6;
  let phasey = height / 2;

  let phaseShadowy = phasey - d2/2;
  let phaseShadowx;

  fill(255,255,75,255);
  circle(phasex, phasey, d2);
    
  fill(0,25,25,255);
  phaseShadowDx = map(a, (0), (-(2 * Math.PI)),  1/2*d2,  -3/2*d2);
  phaseShadowx = phasex + phaseShadowDx;
  
  stroke(0,25,25,255);
  ellipseMode(CENTER);
  ellipse(phaseShadowx + d2/2, phaseShadowy + d2/2, d2, 2*d2);
  
}
// save the canvas as image
function keyTyped() {
  if (key === 's') {
    saveCanvas(c, 'moon-phases', 'jpg');
  }
  return false;
}

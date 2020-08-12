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
  let bg_color = color(0,25,25,255);
  let light_color = color(255,255,75,255);
  background(bg_color);
  
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

  //stroke(255,0,255);
  line(phasex, 0, phasex, height);

  let color1 = color(0,25,25,0); //red
  let color2 = color(0,25,25,0); //gray
  let color3 = color(0,25,25,0); //blue
  let color4 = color(0,25,25,0); //green

  if (-Math.PI/2 < a && a < 0) {
    color3 = light_color;
    color4 = light_color;
    color1 = light_color;
    color2 = bg_color;
  } else if (-Math.PI < a && a < -Math.PI/2) {
    color1 = light_color;
    color3 = bg_color;
    color4 = bg_color;
    color2 = bg_color;
  } else if (-3*Math.PI/2 < a && a < -Math.PI) {
    color4 = bg_color;
    color2 = light_color;
    color1 = bg_color;
    color3 = bg_color;
  } else if (-2*Math.PI < a && a < -3*Math.PI/2) {
    color4 = color(0,255,0,0);
    color3 = light_color;
    color1 = bg_color;
    color2 = light_color;
  }

  fill(color1);
  //let widthMoonPhase = map(Math.sin(a), -1, 1, -d2, d2);
  arc(phasex, phasey, d2, d2, PI/2, 3 * PI/2);
  fill(color2);
  arc(phasex, phasey, d2, d2, 3 * PI/2, PI/2);

  let heightPhase = d2;
  let widthPhase = map(Math.cos(a), 0, 1, 0, d2);

  fill(color3);
  arc(phasex, phasey, widthPhase - 2, heightPhase + 1, PI/2, 3 * PI/2);
  fill(color4);
  arc(phasex, phasey, widthPhase - 2, heightPhase + 1, 3 * PI/2, PI/2);

  //let phaseShadowx = phasex - d2/2;
  //let phaseShadowy = phasey - d2/2;
  //phaseShadowDx = map(a, (0), (-(2 * Math.PI)),  -3/2*d2,  1/2*d2);
  //phaseShadowx = phasex + phaseShadowDx;
  //ellipseMode(CENTER);
  //ellipse(phaseShadowx + d2/2, phaseShadowy + d2/2, d2, 2*d2);
  
  //rectMode(CENTER);
  //rect(phaseShadowx + d2/2, phaseShadowy + d2/2, d2, 2*d2);
  
}
// save the canvas as image
function keyTyped() {
  if (key === 's') {
    saveCanvas(c, 'moon-phases', 'jpg');
  }
  return false;
}

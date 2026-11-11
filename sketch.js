let symmetry = 7; // Number of reflections 
let angle;
let t = 0; // Time variable 

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background("white");
  let jpgButton = createButton('Export JPG');
  jpgButton.mousePressed(function() {
    saveCanvas('myScope', 'jpg');
  })
  angle = 360 / symmetry;
}

function draw() {
  translate(width / 2, height / 2); // Move the origin to the center of the canvas
  let r1 = map(noise(t), 0, 1, 20, width / 2); // Random radius for the first point
  let theta1 = map(noise(t + 10), 0, 1, -angle, angle); // Random angle for the first point
  let x1 = r1 * cos(theta1); // Calculate x coordinate for the first point
  let y1 = r1 * sin(theta1); // Calculate y coordinate for the first point
  let r2 = map(noise(t + 0.02), 0, 1, 20, width / 2); // Random radius for the second point
  let theta2 = map(noise(t + 10.02), 0, 1, -angle, angle); // Random angle for the second point
  let x2 = r2 * cos(theta2); // Calculate x coordinate for the second point
  let y2 = r2 * sin(theta2); // Calculate y coordinate for the second point
  let hue = (frameCount * 0.5) % 360; // Cycle through rainbow colors
  let weight = map(noise(t + 20), 0, 1, 1, 6); // Random stroke weight for the lines
  stroke(hue, 80, 95,20); // Set stroke color with some transparency
  strokeWeight(weight); // Set stroke weight
  for (let i = 0; i < symmetry; i++) {
    rotate(angle);
    line(x1, y1, x2, y2);
    push();
    scale(1, -1);
    line(x1, y1, x2, y2);
    pop();
  }   // Draw lines with symmetry and reflection

  t += 0.015; // Increment time variable for noise function
}


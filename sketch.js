// Project based on this article :
// https://bduvenhage.me/geometry/2019/07/31/generating-equidistant-vectors.html

const gr = (Math.sqrt(5.0) + 1.0) / 2.0; // golden ratio = 1.61803
const ga = (2.0 - gr) * (2.0 * Math.PI); // golden angle = 2.399963
const num_points = 5000;
const k = 4;


function setup() {
  createCanvas(600, 600);
  strokeWeight(4); // Set Dot Size
}

function draw() {
  background(255);

  for (i = 1; i <= num_points; i++) {
    //Calcultate Position
    const r = Math.sqrt(i) * k;
    const theta = ga * i;
    const x = Math.cos(theta) * r;
    const y = Math.sin(theta) * r;
    
    // Lerp Color By Distance 
    const distance = dist(abs(x),abs(y), width / 2, height / 2)
    const d = map(distance, 0, 275, 0 , 1)
    const c = lerpColor(color(0), color(200), d);
    stroke(c);
    
    point(x + width / 2, y + height / 2);
  }
}

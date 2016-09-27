var radiouses = [];
var angles = [];
function setup() {
  createCanvas(640,640);
  stroke(230);
  strokeWeight(2);
  setCircles();
}
function setCircles(){
  for(var i = 0; i < 10; i++){
    var angle = random(TWO_PI);
    for(var j = 0; j < 15; j++){
      var radious = map(sqrt(j/15.0),0,1,0,350);
      radiouses.push(radious);
      angles.push(angle);
      angle += random(-PI/16, PI/16);
      angles.push(angle);
    }
  }
}
function draw() {
  background(230);
  translate(width/2,height/2);
  var time = PI * (frameCount % 100) / 100.0 + HALF_PI;
  for(var i = 0; i < radiouses.length; i++){
    switch(i % 4){
      case 0:
        fill(40);
        break;
      case 1:
        fill(0, 206, 209);
        break;
      case 2:
        fill(230);
        break;
      case 3:
        fill(209, 0, 101);
        break;
    }
    var radious = radiouses[i] * (1.0 - abs(sin(time)));
    var angle = angles[i];
    var diameter = map(radious, 0,350,130,5);
    ellipse(radious * cos(angle), radious * sin(angle), diameter, diameter);
  }
  if(frameCount % 100 == 0){
    setCircles();
  }
}
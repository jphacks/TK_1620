/***************************************/
/*page. 68                             */
/***************************************/

// function setup() {
//   createCanvas(500,300);
//   smooth();
//   background(230,230,230);


// }

// function draw() {
//   stroke(130,0,0);
//   strokeWeight(4);
//   line(width/2-70,height/2-70,width/2+70,height/2+70);
//   line(width/2+70,height/2-70,width/2-70,height/2+70);
//   fill(255,150);
//   ellipse(width/2,height/2,50,50);
// }

/***************************************/
/*page. 76                             */
/***************************************/
// var diam=10;
// var centX,centY;

// function setup(){
//   createCanvas(500,300);
//   frameRate(30);
//   smooth();
//   background(180);
//   centX=width/2;
//   centY=height/2;
//   stroke(0);
//   strokeWeight(5);
//   fill(255,50);
// }

// function draw(){
//   if(diam<=400){
//     background(180);
//     ellipse(centX,centY,diam,diam);
//     diam+=10;
//   }else{
//     diam=0;
//   }
// }

/***************************************/
/*page. 85                             */
/***************************************/
// var diam = 10;
// var centX, centY;

// function setup() {
//   createCanvas(500, 300);
//   frameRate(30);
//   smooth();
//   background(180);
//   centX = width / 2;
//   centY = height / 2;
//   stroke(0);
//   strokeWeight(1);
//   //noFill();
//   fill(255,25);
// }

// function draw() {
//   if (diam <= 400) {
//     ellipse(centX, centY, diam, diam);
//     diam += 10;
//   }
// }

/***************************************/
/*page. 87                             */
/***************************************/
// function setup(){
//   createCanvas(500,300);
//   background(180);
//   strokeWeight(4);
//   strokeCap(SQUARE);
//   for(var i=0;i<=(height-15);i+=10){
//     stroke(0,255-i);
//     line(10,i,width-20,i);
//     stroke(255,i);
//     line(10,i+4,width-20,i+4);
//   }
// }

/***************************************/
/*page. 103                            */
/***************************************/
// var step=10;
// var lastx=-999;
// var lasty=-999;
// var y=50;
// var borderx=20;
// var bordery=10;

// function setup(){
//   createCanvas(500,100);
//   background(255);
//   strokeWeight(5);
//   smooth();
//   stroke(20,50,70,50);
//   line(20,50,480,50);
//   stroke(20,50,70);
//   strokeWeight(0.5);
//   for(var x=borderx;x<=width-borderx;x+=step){
//     y=bordery+random(height-2*bordery);
//     if(lastx>-999){
//       line(x,y,lastx,lasty);
//     }
//     lastx=x;
//     lasty=y;
//   }
// }

/***************************************/
/*page. 104                            */
/***************************************/
// var xstep=10;
// var ystep=10;
// var lastx=20;
// var lasty=50;
// var y=50;

// function setup(){
//   createCanvas(500,100);
//   background(255);
//   strokeWeight(5);
//   smooth();
//   stroke(20,50,70,50);
//   line(20,50,480,50);
//   stroke(20,50,70);
//   strokeWeight(1);
//   for(var x=20;x<=480;x+=xstep){
//     ystep=random(20)-10; // -10 to 10
//     y +=ystep;
//     line(x,y,lastx,lasty);
//     lastx=x;
//     lasty=y;
//   }
// }

/***************************************/
/*page. 107                            */
/***************************************/
// function setup() {
//   var lastx = -999;
//   var lasty = -999;
//   var step = 1;
//   var ynoise = random(10);
//   var y;
//   createCanvas(500, 100);
//   background(255);

//   smooth();
//   strokeWeight(5);
//   stroke(0, 30);
//   line(20, 50, 480, 50);

//   stroke(20, 50, 70);
//   strokeWeight(1);
//   for (var x = 20; x <= 480; x += step) {
//     y = 10 + noise(ynoise) * 80;
//     if (lastx > -999) {
//       line(x, y, lastx, lasty);
//     }
//     lastx = x;
//     lasty = y;
//     ynoise += 0.03;
//   }
// }

/***************************************/
/*page. 116                            */
/***************************************/
// var radius=100;
// var centx=250;
// var centy=150;

// function setup(){
//   createCanvas(500,300);
//   background(255);
//   strokeWeight(5);
//   smooth();

//   stroke(0,30);
//   noFill();
//   ellipse(centx,centy,radius*2,radius*2);

//   stroke(20,50,70);
//   var x,y;
//   var lastx=-999;
//   var lasty=-999;
//   for(var ang=0;ang<=360;ang+=5){
//     var rad=radians(ang);
//     x=centx+(radius*cos(rad));
//     y=centy+(radius*sin(rad));
//     point(x,y);
//   }
// }

/***************************************/
/*page. 117-1                          */
/***************************************/
// var radius=10;
// var centx=250;
// var centy=150;

// function setup(){
//   createCanvas(500,300);
//   background(255);
//   strokeWeight(5);
//   smooth();

//   stroke(0,30);
//   noFill();
//   ellipse(centx,centy,radius*2,radius*2);

//   stroke(20,50,70);
//   var x,y;
//   var lastx=-999;
//   var lasty=-999;
//   for(var ang=0;ang<=1440;ang+=5){
//     radius+=0.5;
//     var rad=radians(ang);
//     x=centx+(radius*cos(rad));
//     y=centy+(radius*sin(rad));
//     if(lastx>-999){
//       line(x,y,lastx,lasty);
//     }
//     lastx=x;
//     lasty=y;
//   }
// }

/***************************************/
/*page. 117-2                          */
/***************************************/
// var radius=10;
// var centx=250;
// var centy=150;

// function setup(){
//   createCanvas(500,300);
//   background(255);
//   strokeWeight(5);
//   smooth();

//   stroke(0,30);
//   noFill();
//   ellipse(centx,centy,radius*2,radius*2);

//   stroke(20,50,70);
//   var x,y;
//   var lastx=-999;
//   var lasty=-999;
//   var radiusNoise=random(10);
//   for(var ang=0;ang<=1440;ang+=5){
//     radius+=0.5;
//     radiusNoise+=0.05;
//     var thisRadius=radius+(noise(radiusNoise)*200)-100;
//     var rad=radians(ang);
//     x=centx+(thisRadius*cos(rad));
//     y=centy+(thisRadius*sin(rad));
//     if(lastx>-999){
//       line(x,y,lastx,lasty);
//     }
//     lastx=x;
//     lasty=y;
//   }
// }

/***************************************/
/*page. 119-2 list4.4                  */
/***************************************/
// var radius = 10;
// var centx = 400;
// var centy = 400;

// function setup() {
//   createCanvas(800, 800);
//   background(255);
//   strokeWeight(0.5);
//   smooth();

//   stroke(0, 30);
//   noFill();
//   ellipse(centx, centy, radius * 2, radius * 2);

//   stroke(20, 50, 70);
//   var x, y;
//   for (var i = 0; i < 100; i++) {
//     var lastx = -999;
//     var lasty = -999;
//     radius = 10;
//     stroke(random(20), random(150), random(170), 100);
//     strokeWeight(random() + 0.1);
//     var startangle = round(random(360));
//     var endangle = 1440 + round(random(1440));
//     var anglestep = 5 + round(random(3));
//     var radiusNoise = random(10);
//     for (var ang = startangle; ang <= endangle; ang += anglestep) {
//       radius += 0.5;
//       radiusNoise += 0.05;
//       var thisRadius = radius + (noise(radiusNoise) * 200) - 100;
//       var rad = radians(ang);
//       x = centx + (thisRadius * cos(rad));
//       y = centy + (thisRadius * sin(rad));
//       if (lastx > -999) {
//         line(x, y, lastx, lasty);
//       }
//       lastx = x;
//       lasty = y;
//     }
//   }
// }

/***************************************/
/*page. 121 list4.5                    */
/***************************************/
// function setup() {
//   createCanvas(500, 300);
//   background(255);
//   strokeWeight(5);
//   smooth();

//   var radius = 100;
//   var centx = 250;
//   var centy = 150;

//   stroke(0, 30);
//   noFill();
//   ellipse(centx, centy, radius * 2, radius * 2);
//   stroke(20, 50, 70);
//   strokeWeight(1);

//   var x, y;
//   var noiseval = random(10);
//   var radVariance, thisRadius, rad;
//   beginShape(TRIANGLES);
//   fill(20, 50, 70, 50);
//   for (var ang = 0; ang <= 360; ang += 1) {
//     noiseval += 0.1;
//     radVariance = 30 * customNoise1(noiseval);

//     thisRadius = radius + radVariance;
//     rad = radians(ang);
//     x = centx + (thisRadius * cos(rad));
//     y = centy + (thisRadius * sin(rad));

//     curveVertex(x, y);
//     curveVertex(centx,centy);
//   }
//   endShape();
// }

// function customNoise(value) {
//   var retValue = pow(sin(value), 3);
//   return retValue;
// }

// function customNoise1(value) {
//   var count=round(value%12);
//   var retValue = pow(sin(value), count);
//   return retValue;
// }

/***************************************/
/*page. 127-1                          */
/***************************************/
// function setup() {
//   var _angle;
//   var _radius = 150;
//   var centerx = 250;
//   var centery = 250;

//   createCanvas(500, 500);

//   background(230);
//   strokeWeight(0.5);
//   smooth();

//   for (_angle = 0; _angle <= 330; _angle += 1) {
//     var rad = radians(_angle);
//     stroke(20*_angle,50,150*_angle,100*_angle/330+1);
//     var x1 = centerx + (_radius * cos(rad));
//     var y1 = centery + (_radius * sin(rad));

//     var opprad = rad + PI;
//     var x2 = centerx + (_radius * cos(opprad));
//     var y2 = centery + (_radius * sin(opprad));

//     line(x1, y1, x2, y2);
//   }
// }

/***************************************/
/*page. 128                            */
/***************************************/
// var _angnoise, _radiusnoise;
// var _xnoise, _ynoise;
// var _angle;
// var _radius;
// var _strokeCol;
// var _strokechange;

// function setup() {
//   createCanvas(720, 720);
//   smooth();
//   frameRate(60);
//   background(255);
//   noFill();

//   _angle=-PI/2;
//   _strokeCol=254;
//   _strokeChange=-1;
//   _angnoise = random(10);
//   _radiusnoise = random(10);
//   _xnoise = random(10);
//   _ynoise = random(10);
// }

// function draw() {
//   _radiusnoise += 0.005;
//   _radius = (noise(_radiusnoise) * 550) + 1;

//   _angnoise += 0.005;
//   _angle += (noise(_angnoise) * 6) - 3;
//   if (_angle > 360) {
//     _angle -= 360;
//   }
//   if (_angle < 0) {
//     _angle += 360;
//   }

//   _xnoise += 0.01;
//   _ynoise += 0.01;

//   var centerx = width / 2 + (noise(_xnoise) * 100) - 50;
//   var centery = height / 2 + (noise(_ynoise) * 100) - 50;

//   var rad = radians(_angle);
//   var x1 = centerx + (_radius * cos(rad));
//   var y1 = centery + (_radius * sin(rad));

//   var opprad = rad + PI;
//   var x2 = centerx + (_radius * cos(opprad));
//   var y2 = centery + (_radius * sin(opprad));

//   _strokeCol += _strokeChange;
//   if (_strokeCol > 254) {
//     _strokeChange = -1;
//   }
//   if (_strokeCol < 0) {
//     _strokeChange = 1;
//   }
//   //stroke(_strokeCol,_strokeCol, 255-_strokeCol, 50);
//   stroke(_strokeCol,60);
//   strokeWeight(2*_strokeCol/254);
//   line(x1, y1, x2, y2);
//   //console.log("x1: "+x1+",y1: "+y1+",x2: "+x2+",y2: "+y2);
}

/***************************************/
/*page. 132                            */
/***************************************/
// function setup() {
//   createCanvas(300, 300);
//   smooth();
//   background(255);
//   var xstart = random(10);
//   var xnoise = xstart;
//   var ynoise = random(10);

//   for (var y = 0; y <= height; y += 1) {
//     ynoise += 0.01;
//     xnoise = xstart;
//     for (var x = 0; x <= width; x += 1) {
//       xnoise += 0.01;
//       var alph = round(noise(xnoise, ynoise) * 255);
//       stroke(0, alph);
//       line(x, y, x + 1, y + 1);
//     }
//   }
// }

/***************************************/
/*page. 133                            */
/***************************************/
// function setup() {
//   var xstart, xnoise, ynoise;
//   createCanvas(500, 500);
//   smooth();
//   background(255);
//   xstart = random(10);
//   ystart = xstart;
//   ynoise = random(10);
//   for (var y = 0; y <= height; y += 5) {
//     ynoise += 0.1;
//     xnoise = xstart;
//     for (var x = 0; x <= width; x += 5) {
//       xnoise += 0.1;
//       drawPoint1(x, y, noise(xnoise, ynoise));
//     }
//   }
// }

// var drawPoint = function(x, y, noiseFactor) {
//   var len = 10 * noiseFactor;
//   rect(x, y, len, len);
// }

// var drawPoint1 = function(x, y, noiseFactor) {
//   push();
//   translate(x, y);
//   rotate(noiseFactor * radians(360));
//   stroke(0, 150);
//   line(0, 0, 20, 0);
//   pop();
// }

// var drawPoint2 = function(x, y, noiseFactor) {
//   push();
//   translate(x, y);
//   rotate(noiseFactor * radians(540));
//   var edgeSize = noiseFactor * 35;
//   var grey = 150 + (noiseFactor * 120);
//   var alph = 150 + (noiseFactor * 120);
//   noStroke();
//   fill(grey, alph);
//   ellipse(0, 0, edgeSize, edgeSize);
//   pop();
// }

/***************************************/
/*page. 137                            */
/***************************************/
// var xstart, xnoise, ystart, ynoise;

// function setup() {
//   createCanvas(500,500);
//   smooth();
//   background(0);
//   frameRate(24);

//   xstart = random(10);
//   ystart = random(10);
// }

// function draw() {
//   background(0);

//   xstart += 0.01;
//   ystart += 0.01;

//   xnoise = xstart;
//   ynoise = ystart;

//   for (var y = 0; y <= height; y += 5) {
//     ynoise += 0.1;
//     xnoise += xstart;
//     for (var x = 0; x <= width; x += 5) {
//       xnoise += 0.1;
//       drawPoint(x, y, noise(xnoise, ynoise));
//     }
//   }
// }

// var drawPoint = function(x, y, noiseFactor) {
//   push();
//   translate(x, y);
//   rotate(noiseFactor * radians(540));
//   noStroke();
//   var edgeSize = noiseFactor * 35;
//   var grey = 150 + (noiseFactor * 120);
//   var alph = 150 + (noiseFactor * 120);
//   fill(grey, alph);
//   ellipse(0, 0, edgeSize, edgeSize / 2);
//   pop();
// }

/***************************************/
/*page. 132 instance mode              */
/***************************************/
// var _myP5Logic = function(p) {
//   p.setup = function() {
//     p.createCanvas(300, 300);
//     p.smooth();
//     p.background(255);
//     var xstart = p.random(10);
//     var xnoise = xstart;
//     var ynoise = p.random(10);

//     for (var y = 0; y <= p.height; y += 1) {
//       ynoise += 0.01;
//       xnoise = xstart;
//       for (var x = 0; x <= p.width; x += 1) {
//         xnoise += 0.01;
//         var alph = p.round(p.noise(xnoise, ynoise) * 255);
//         p.stroke(0, alph);
//         p.line(x, y, x + 1, y + 1);
//       }
//     }
//   }
// }
// var myP5=new p5(_myP5Logic);


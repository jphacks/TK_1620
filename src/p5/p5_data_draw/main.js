/*************************************************************************/
/*  yデータの波形を                                               */
/*************************************************************************/
// var _angnoise, _radiusnoise;
// var _xnoise, _ynoise;
// var _angle;
// var _radius;
// var canvasRes=800;
//
// function preload(){
//   dataX=loadStrings('./assets/x.dat');
//   dataY=loadStrings('./assets/y.dat');
// }
//
// function setup(){
//   createCanvas(canvasRes,canvasRes);
//   smooth();
//   strokeWeight(0.5);
//   background(255);
//   console.log(width);
//   console.log(height);
//   drums = EDrums('x*o*x*o-');
//   pointer=0;
//   bufSize=700;
//   alphNoiseSeed=0;
//   colorNoiseSeed=0;
//
//   alphNoise=0;
//   colorNoise=0;
// }
//
// function draw(){
//   alphNoise=noise(alphNoiseSeed);
//   colorNoise=noise(colorNoiseSeed);
//   // background(255,150*alphNoise);
//   _radiusnoise += 0.005;
//   _radius = (noise(_radiusnoise) * 550) + 1;
//
//   _angnoise += 0.005;
//   _angle += (noise(_angnoise) * 6) - 3;
//   if (_angle > 360) {
//     _angle -= 360;
//   }
//   if (_angle < 0) {
//     _angle += 360;
//   }
//
//   _xnoise += 0.01;
//   _ynoise += 0.01;
//
//   var centerx = 50*dataY[pointer] + (noise(_xnoise) * 100) - 50;
//   var centery = 50*dataY[pointer]  + (noise(_ynoise) * 100) - 50;
//
//   var rad = radians(_angle);
//   var x1 = centerx + (_radius * cos(rad));
//   var y1 = centery + (_radius * sin(rad));
//
//   var opprad = rad + PI;
//   var x2 = centerx + (_radius * cos(opprad));
//   var y2 = centery + (_radius * sin(opprad));
//
//   stroke(colorNoise*200,colorNoise*200,255-colorNoise*255);
//   line(x1, y1, x2, y2);
//   //console.log(dataY[pointer]);
//
//   alphNoiseSeed+=0.001;
//   colorNoiseSeed+=0.01;
//   pointer=(pointer>dataY.length)?0:pointer+1;
// }

/*************************************************************************/
/*  yデータの波形をlineで描画                                               */
/*************************************************************************/
// var canvasRes=800;
//
// function preload(){
//   dataX=loadStrings('./assets/x.dat');
//   dataY=loadStrings('./assets/y.dat');
// }
//
// function setup(){
//   createCanvas(canvasRes,canvasRes);
//   smooth();
//   strokeWeight(0.5);
//   console.log(width);
//   console.log(height);
//   drums = EDrums('x*o*x*o-');
//   pointer=0;
//   bufSize=700;
//   alphNoiseSeed=0;
//   colorNoiseSeed=0;
//
//   alphNoise=0;
//   colorNoise=0;
// }

// function draw(){
//   alphNoise=noise(alphNoiseSeed);
//   colorNoise=noise(colorNoiseSeed);
//   // background(255,150*alphNoise);
//   background(0);
//   stroke(colorNoise*200,colorNoise*200,255-colorNoise*255);
//   for(var i=pointer;i<=bufSize+pointer;i++){
//     line((i-pointer+50),canvasRes/2,(i-pointer+50),0.5*canvasRes*dataY[i%dataY.length]+canvasRes/2);
//   }
//   alphNoiseSeed+=0.001;
//   colorNoiseSeed+=0.01;
//   pointer=frameCount%dataY.length;
// }

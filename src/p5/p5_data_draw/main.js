/*************************************************************************/
/*  yデータの波形をlineで描画                                               */
/*************************************************************************/
var canvasRes=800;

function preload(){
  dataX=loadStrings('./assets/x.dat');
  dataY=loadStrings('./assets/y.dat');
}

function setup(){
  createCanvas(canvasRes,canvasRes);
  smooth();
  strokeWeight(0.5);
  console.log(width);
  console.log(height);

  pointer=0;
  bufSize=700;
  alphNoiseSeed=0;
  colorNoiseSeed=0;
  
  alphNoise=0;
  colorNoise=0;
}

function draw(){
  alphNoise=noise(alphNoiseSeed);
  colorNoise=noise(colorNoiseSeed);
  // background(255,150*alphNoise);
  background(0);
  stroke(colorNoise*200,colorNoise*200,255-colorNoise*255);
  for(var i=pointer;i<=bufSize+pointer;i++){
    line((i-pointer+50),canvasRes/2,(i-pointer+50),0.5*canvasRes*dataY[i%dataY.length]+canvasRes/2);
  }
  alphNoiseSeed+=0.001;
  colorNoiseSeed+=0.01;
  pointer=frameCount%dataY.length;
}

/*************************************************************************/
/*                                                                       */
/*************************************************************************/
// var canvasRes=800;
// var i=0;
//
// function preload(){
//   dataX=loadStrings('./assets/x.dat');
//   dataY=loadStrings('./assets/y.dat');
//   //dataZ=loadStrings('./assets/z.dat');
// }
//
// function setup(){
//   createCanvas(canvasRes,canvasRes);
//   smooth();
//   strokeWeight(0.5);
//
//   //EDrums('x*o*x*o-**xo*-');
// }
//
// function draw(){
//   while(i<dataY.length){
//     if(dataY[i]>1){
//       EDrums('x*o*x*o-**xo*-');
//       console.log("detect!");
//     }
//   }
//   i=(i>dataY.length)?0:i+1;
// }

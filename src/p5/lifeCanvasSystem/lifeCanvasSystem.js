// myscript.js

// var x=0;
var sample=[];
var animation;
var canvasRes=720;

function setup(){
  createCanvas(canvasRes,canvasRes);
  sample[0]=loadSound('assets/kick1.mp3');
  sample[1]=loadSound('assets/amb1.mp3');
  console.log("set up called.");
  console.log(sample);
}

function draw(){
  background(0);
  if(animation){
    animation.draw();
  }
  //rect(x,40,50,50);
  //x++;
  // console.log(x);
}

function keyTyped(){
  if(key=='a'){
    sample[0].play();
    animation = new anim_a();
  }
  if(key=='s'){
    sample[1].play();
    animation =new anim_s();
  }
}

function touchStarted(){
  if(touchX>width/2){
    sample[0].play();
    animation = new anim_a();
  }
  if(touchX<width/2){
    sample[1].play();
    animation =new anim_s();
  }
}

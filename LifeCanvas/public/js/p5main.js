/********************************************/
/* グローバル変数
/********************************************/
var _canvasSize=720; // キャンバスサイズ

var _particles=[]; // パーティクルオブジェクトの配列
var _particleNum=500; // パーティクルの数
var _sLimit=240; //パーティクルの最大速度
var _weather="SNOWY"; //天気の情報(SUNNY,RAINY,CLOUDY,SNOWY)
var _frameMaskBl;
var _frameMaskWh;
var _frameMaskCol; // フレーム更新時のマスク
var size = 0;
var _pointer;

function setup(){
  createCanvas(_canvasSize,_canvasSize);
  colorMode(HSB, 360, 100, 100, 1);
  background(0);

  _frameMaskBl=color('hsba(1,1%,0%,0.035)');
  _frameMaskWh=color('hsba(1,1%,100%,0.035)');
  _frameMaskCol=_frameMaskBl;
  _pointer=new Pointer();

  // パーティクルのインスタンスを生成する
  for (var i=0; i<_particleNum; i++) {
    _particles.push(new Particle());
  }

  _pointer.pos.x=width/2;
  _pointer.pos.y=height/2;


  // gbXox=XOX('x.....x.....x...');
  // gbPluck = Pluck();
  // gbDelay=Delay();
  // gbSeq=Seq({
  //   time: Rndi( ms(2), ms(1000) ),
  //   durations:1/32,
  //   target: gbDelay
  // });
  // gbPluck.note.seq( [0, 2], [1/8,1/16].rnd(1/16,2) ).pan.seq(Rndf(-0.8,0.8)).damping(0.3).fx.add(Schizo());
  // gbPluck.blend.seq( Rndf(0.8,1) );
  // gbPluck.fx.add(gbDelay);
  //
  // gbBass = Mono( 'bass2' ,{waveform:'Square'}).amp(.1).note.seq( [0, 2], [1/8,1/16].rnd(1/16,2) );
  // gbPad = Synth2( 'pad2', { amp:.85 } ).chord.seq( Rndi(0,2,9), 2 ).fx.add( Delay() );

  gbXox=XOX('x.*...x.**..x...');
 gbXox.fx.add(
   Crush({
     bitDepth: 1+15*_pointer.pos.y/height,
     sampleRate: _pointer.pos.x/width
   })
 );

 xoxFollow=Follow(gbXox);

 gbPluck = Pluck();
 gbPluck.fx.add(
   Delay({
     time: 50*_pointer.pos.x/width,
     feedback: 2*_pointer.pos.y/height,
     durations:1/8
   })
 );

 gbPluck.note.seq( [0, 2], [1/8,1/16].rnd(1/16,2) ).pan.seq(Rndf(-0.8,0.8)).damping(0.8).fx.add(Schizo());
 gbPluck.blend.seq( Rndf(0.8,1) );

 gbBass = Mono( 'bass2' ,{waveform:'Square'}).amp(.1).note.seq( [0, 2], [1/8,1/16].rnd(1/16,2) ).fx.add(
   Flanger({
     rate: 0.1+19.9*_pointer.pos.x/width,
     amount: 200*_pointer.pos.y/height
   })
 );
 gbPad = Synth2( 'pad2', { amp:.85 } ).chord.seq( Rndi(0,2,9), 2 ).fx.add(
   Reverb({
     roomSize: .99,
     damping: 0.9
   })
 );

}

function draw(){
  noStroke();
  // パーティクルを上塗りする量
   background(_frameMaskCol);

  // パーティクルの更新と描画
  for(var i=0;i<_particles.length;i++){
    _particles[i].update();
    _particles[i].draw();
  }

  socket.on('sensor_data', function(data){
    if (data[0] == "acceleration"){
      //size = data[1]*100;
      _pointer.update(data[1],data[2]);
    }
    //console.log(data);
  });
  //ellipse(width/2, height/2, size, size);

}

function mousePressed(){
  for(var i=0;i<_particles.length;i++){
    _particles[i].inv();
  }
}

function keyTyped() {
  if (key === 'a') {
    _frameMaskCol=(_frameMaskCol==_frameMaskBl)?_frameMaskWh:_frameMaskBl;
  } else if(key=='s'){
    for(var i=0;i<_particles.length;i++){
      _particles[i].mirror();
    }
  } else if(key=='1'){
    _weather="SUNNY";
    for(var i=0;i<_particles.length;i++){
      _particles[i].colChange();
    }
  }else if(key=='2'){
    _weather="RAINY";
    for(var i=0;i<_particles.length;i++){
      _particles[i].colChange();
    }
  }else if(key=='3'){
    _weather="CLOUDY";
    for(var i=0;i<_particles.length;i++){
      _particles[i].colChange();
    }
  }else if(key=='4'){
    _weather="SNOWY";
    for(var i=0;i<_particles.length;i++){
      _particles[i].colChange();
    }
  }
  else {
    for(var i=0;i<_particles.length;i++){
      _particles[i].dilation();
    }
  }
}

var Particle=function(){
  this.pos= createVector(random(width-1),random(height-1));
  //console.log(this.pos);
  this.pre= createVector(this.pos.x,this.pos.y);
  this.sp= createVector(random(10),random(10));
  this.ac= createVector(0,0);
  // this.mouse= createVector(width/2,height/2);
  this.tune=random(3,20);
  this.strokeW=random(0.1,3);
  this.initStrokeW=this.strokeW;

  switch(_weather){
    case "SUNNY":
    this.col=color(random(320,420)%360,100,100);
    break;
    case "RAINY":
    this.col=color(random(170,250)%360,100,100);
    break;
    case "CLOUDY":
    this.col=color(0,0,round(random(30,100)));
    break;
    case "SNOWY":
    this.col=color(208,round(random(0,100)),100);
    break;
    default:
    this.col=color(random(360),90,100);
    break;
  }
};

Particle.prototype={
  update : function(){
    this.pre=createVector(this.pos.x,this.pos.y);
    if(this.pos.x>width || this.pos.x<0){
      this.sp.x*=-0.5;
    }
    if(this.pos.y<0||this.pos.y>height){
      this.sp.y*=-0.5;
    }
    if(this.strokeW>this.initStrokeW){
      this.strokeW-=0.5;
    }else if(this.strokeW<this.initStrokeW){
      this.strokeW=this.initStrokeW;
    }

    attraction=createVector(_pointer.pos.x,_pointer.pos.y);
    attraction.sub(this.pos);
    this.ac.set(attraction);
    this.ac.normalize();
    this.ac.div(this.tune);
    this.sp.add(this.ac);
    this.sp.limit(_sLimit*(1.0/60.0));
    this.pos.add(this.sp);
  },
  draw : function(){
    stroke(this.col);
    strokeWeight(this.strokeW);
    line(this.pre.x,this.pre.y,this.pos.x,this.pos.y);
  },
  inv : function(){
    this.pre=createVector(this.pos.x,this.pos.y);
    if(this.pos.x>width || this.pos.x<0){
      this.sp.x*=-0.5;
    }else{
      this.sp.x*=-6;
      this.ac.x*=-1;
    }
    if(this.pos.y<0||this.pos.y>height){
      this.sp.y*=-0.5;
    }else{
      this.sp.y*=-6;
      this.ac.y*=-1;
    }

    //attraction=createVector(_pointer.pos.x,_pointer.pos.y);
    //attraction.sub(this.pos);
    //this.ac.set(attraction);
    this.ac.normalize();
    this.ac.div(this.tune);
    this.sp.add(this.ac);
    // this.sp.limit(_sLimit*(1.0/20.0));
    this.pos.add(this.sp);
  },
  dilation :function(){
    if(this.strokeW<5){
      this.strokeW*=4;
    }
  },
  mirror : function(){
    this.pos.set(width-this.pos.x,height-this.pos.y);
    // this.pos.y=height-this.pos.y;
  },
  colChange: function(){
    switch(_weather){
      case "SUNNY":
      this.col=color(random(320,420)%360,100,100);
      break;
      case "RAINY":
      this.col=color(random(170,250)%360,100,100);
      break;
      case "CLOUDY":
      this.col=color(0,0,round(random(30,100)));
      break;
      case "SNOWY":
      this.col=color(208,round(random(0,100)),100);
      break;
      default:
      this.col=color(random(360),90,100);
      break;
    }
  }
};

function hamon(xPos, yPos, size, num, interval, col) {
  noFill();
  stroke(col);
  for (var i = 0; i < num; i += interval) {
    ellipse(xPos, yPos, size + interval * i);
  }
}

var Pointer=function(){
  this.pos=createVector(0,0);

  this.ac=createVector(0,0);
};

Pointer.prototype={
  update : function(x,y){
    //this.pre=createVector(this.pos.x,this.pos.y);
    if(this.pos.x>width || this.pos.x<0){
      this.ac.x*=-1.0;
    }
    if(this.pos.y<0||this.pos.y>height){
      this.sp.y*=-1.0;
    }
    this.pos.ac.x=x;
    this.pos.ac.y=y;
    // attraction=createVector(_pointer.pos.x,_pointer.pos.y);
    // attraction.sub(this.pos);
    // this.ac.set(attraction);
    // this.ac.normalize();
    // this.ac.div(this.tune);
    // this.sp.add(this.ac);
    // this.sp.limit(_sLimit*(1.0/60.0));
    // this.pos.add(this.sp);
    this.pos.x+=this.ac.x;
    this.pos.y+=this.ac.y;
  }
};


// var Particle=(function(){
//     // クラス変数
//     //var pos,pre,mouse,sp,ac,col;
//     var tune=random(3,10);
//     // var tune=3;
//
//     var particle=function(){
//       this.pos= createVector(random(width),random(height));
//       this.pre=createVector(this.pos.x,this.pos.y);
//       this.sp=createVector(random(2),random(2));
//       this.ac=createVector();
//       this.mouse=createVector();
//
//       switch(_weather){
//         case "SUNNY":
//         this.col=color(random(320,420)%360,90,100);
//         break;
//         default:
//         this.col=color(random(360),90,100);
//         break;
//       }
//     };
//
//     var p=particle.prototype;
//
//     p.update=function(){
//       this.pre.copy(this.pos);
//       if(this.pos.x>width || this.pos.x<0){
//         this.sp*=-0.9;
//       }
//       if(this.pos.y<0||pos.y>height){
//         this.sp*=-0.9;
//       }
//       this.mouse.x=_pointer.pos.x;
//       this.mouse.y=_pointer.pos.y;
//       var attraction=createVector(this.mouse.x,this.mouse.y);
//       attraction.sub(this.pos);
//       this.ac.copy(attraction);
//       this.ac.norm();
//       this.ac.div(tune);
//       this.sp.add(acc);
//       this.sp.limit(_sLimit*(1.0/60.0));
//       this.pos.add(this.sp);
//     };
//
//     p.draw=function(){
//       stroke(this.col);
//       strokeWeight(2);
//       line(this.pre.x,this.pre.y,this.pos.x,this.pos.y);
//     };
//
//   return particle;
// })();

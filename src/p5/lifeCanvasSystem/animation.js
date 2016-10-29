function anim_a(){
  this.x=width/2;
  this.y=height/2;
  this.diameter=0;
  this.speed=10;
}

anim_a.prototype.draw=function(){
  noStroke();
  fill(0,127,25);
  ellipse(this.x,this.y,this.diameter,this.diameter);
  this.diameter+=this.speed;
}

function anim_s(){
  this.width=0;
  this.speed=80;
}

anim_s.prototype.draw=function(){
  noStroke();
  fill(255,0,0);
  rectMode(CORNER);
  rect(0,0,this.width,height);
  this.width+=this.speed;
}

function anim_d(){
  this.width=0;
  this.speed=80;
}

anim_s.prototype.draw=function(){
  noStroke();
  fill(255,0,0);
  rectMode(CORNER);
  rect(0,0,this.width,height);
  this.width+=this.speed;
}

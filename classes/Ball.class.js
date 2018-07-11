var Ball = function(canvas, context) {
  
  this.ctx = context;
  this.canvas = canvas;

  this.ballRadius = 10;
  this.x = this.canvas.width/2;
  this.y = this.canvas.height-30;
  this.dx = 2;
  this.dy =-2;

};

Ball.prototype.drawBall = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y, this.ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "#0095DD"; 
    this.ctx.fill();
    this.ctx.closePath();
};
var Paddle = function(canvas, context){

	this.ctx = context;
  	this.canvas = canvas;

  	this.paddleHeight = 10;
	this.paddleWidth = 75;
	this.paddleX = (this.canvas.width-this.paddleWidth)/2;

};

Paddle.prototype.drawPaddle = function(){


	this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.closePath();


};
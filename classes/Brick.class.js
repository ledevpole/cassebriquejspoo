var Brick = function(canvas, context){

	this.ctx = context;
  	this.canvas = canvas;

	this.brickField = [];
	this.brickRowCount = 3;
	this.brickColumnCount = 5;
	this.brickWidth = 75;
	this.brickHeight = 20;
	this.brickPadding = 10;
	this.brickOffsetTop = 30;
	this.brickOffsetLeft = 30;


};



Brick.prototype.create = function()
{
	for(var c=0; c<this.brickColumnCount; c++) {
	    this.brickField[c] = [];
	    for(var r=0; r<this.brickRowCount; r++) {
	        this.brickField[c][r] = { x: 0, y: 0, status: 1  };
	    }
	}

};

Brick.prototype.drawBricks = function(){

		for(var c=0; c<this.brickColumnCount; c++) {
        for(var r=0; r<this.brickRowCount; r++) {

        	this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;

            this.brickField[c][r].x = 0;
            this.brickField[c][r].y = 0;
            this.ctx.beginPath();
            this.ctx.rect(this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
        }
    }

}; 
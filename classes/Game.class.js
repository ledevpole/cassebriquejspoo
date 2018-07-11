var Game = function() {

// je creer un boucle générale, je la lance plus tard
  this.boucleGenerale = null;


  this.rightPressed = false;
  this.leftPressed = false;


  // je prends l objet canvas et le context de celui ci
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
// ici je fixe la hauteur et largeur du canvas a la fenetre du device
  this.ctx.canvas.width = window.innerWidth;
  this.ctx.canvas.height = window.innerHeight;
// ici je creer l objet ball, l'objet paddle, le brickField
  this.ball = new Ball(this.canvas, this.ctx);
  this.paddle = new Paddle(this.canvas,this.ctx);


  this.bricks = new Brick(this.canvas,this.ctx);
  this.bricks.create();

  console.log(this.bricks.brickField); 

};



// ici je crée une fonction start et lance ma boucle générale.
// plus tard je peux arreter le jeu avec boucleGenerale = null;
Game.prototype.start = function(){
  this.boucleGenerale = setInterval(this.draw.bind(this), 10);
  this.startListeners();
};

// je dois savoir si le joueur se deplace
Game.prototype.startListeners = function(){

  document.addEventListener("keydown", this.keyDownHandler.bind(this));
  document.addEventListener("keyup", this.keyUpHandler.bind(this));

}



// ici je creer la fontion qui dessine mon jeu, qui est lancé par la boucle de la methode start()
Game.prototype.draw = function(){

 // je commence par nettoyer le dessin precedent
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  // je dessine la balle avec la fonction de l'objet ball
  this.ball.drawBall();
  // je dessine lE PADDLE avec la fontion de l'objet paddle
  this.paddle.drawPaddle(); 

  //this.collisionDetection();

  this.bricks.drawBricks();
  
  // Ici je controle les mouvement et la vitesse de la ball, mon paddle, etc.. depuis la methode control
  this.controls();


};

Game.prototype.keyDownHandler = function (event){

    if(event.keyCode == 39) {
        this.rightPressed = true;
    }
    else if(event.keyCode == 37) {
        this.leftPressed = true;
    }

};

Game.prototype.keyUpHandler = function (event){

    if(event.keyCode == 39) {
        this.rightPressed = false;
    }
    else if(event.keyCode == 37) {
        this.leftPressed = false;
    }

};

Game.prototype.controls = function(){

  this.ball.x += this.ball.dx;
  this.ball.y += this.ball.dy;

  if(this.ball.x + this.ball.dx > this.ball.canvas.width-this.ball.ballRadius || this.ball.x + this.ball.dx < this.ball.ballRadius) {
        this.ball.dx = -this.ball.dx;
    }
    if(this.ball.y + this.ball.dy < this.ball.ballRadius) {

        this.ball.dy = -this.ball.dy;

    }else if(this.ball.y + this.ball.dy > this.ball.canvas.height-this.ball.ballRadius) {

        if(this.ball.x > this.paddle.paddleX && this.ball.x < this.paddle.paddleX + this.paddle.paddleWidth) 
        {
                this.ball.dy = -this.ball.dy;


        }
      else
      {
              alert("GAME OVER");
               document.location.reload();
      }
    }


    if(this.rightPressed && this.paddle.paddleX < this.canvas.width-this.paddle.paddleWidth) {
    this.paddle.paddleX += 7;
    
    }
    else if(this.leftPressed && this.paddle.paddleX > 0) {
    this.paddle.paddleX -= 7;
    }

};

Game.prototype.collisionDetection = function () {

    for(c=0; c<this.bricks.brickColumnCount; c++) {
        for(r=0; r<this.bricks.brickRowCount; r++) {
            var b = this.bricks.brickField[c][r];
            // if(this.ball.x > b.prototype.this.ball.x && this.ball.x < b.prototype.this.ball.x+this.bricks.brickWidth 
            //   && this.ball.y > b.prototype.this.ball.y && this.ball.y < b.prototype.this.ball.y+this.bricks.brickHeight) {
            //     this.ball.dy = -this.ball.dy;
           // }
        }
    }
}
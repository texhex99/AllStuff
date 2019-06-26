// now we will start with the code by declaring our variables.
var myGamePiece;
function reset(){
  myGameArea.stop()
  startGame()


}
function startGame() {// this will start the game.
    myGamePiece = new box(10, 10, "red", 10, 10, 20, 20);
    myGameArea.start()
}
// now lets make our objects and functions. i wll be honest i dont have this memorised so i will be copying from another file i made.
var myGameArea = { // this will allow us to start the game.
    canvas : document.createElement("canvas"),
    start : function() { // this creates our working canvas.
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 10);
    },
    stop : function() {// this stops the game
        clearInterval(this.interval);
    },
    clear : function() {// this clears the canvas.
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function box(width, height, color, x, y, x1, y1){ // this will make the box for us.
 this.width = width;
 this.height = height;
 this.color = color;
 this.speedX = 0;
 this.speedY = 0
 this.y1 = y1
 this.x1 = x1
 this.x = x;
 this.y = y;
 this.gravity = 0.1
 this.gravity1 = 0.2
 this.gravitySpeed = 0
 this.gravitySpeed1 = 0
 this.bounce = 0.3
 this.bounce1 = 0.2
  // these are our variables for the shape and color of our box
 // now we create the box.
this.newBox = function(){ //this function still aint gettin called.
  ctx = myGameArea.context
  ctx.fillStyle = 'blue'
  ctx.fillRect(500,300,500,300)
  ctx.fillStyle = 'gray'
  ctx.fillRect(this.x,this.y, this.width, this.height);
  ctx.fillStyle = 'gold'
  ctx.fillRect(this.x1,this.y1, this.width, this.height);
}
this.updatePos = function(){
  this.gravitySpeed += this.gravity
  this.gravitySpeed1 += this.gravity1
  this.x += this.speedX;
  this.y += this.speedY + this.gravitySpeed
  this.x1 += this.speedX;
  this.y1 += this.speedY + this.gravitySpeed1
  this.hit()

  document.getElementById("coords").innerHTML ="X:"+this.x+", Y:"+this.y
}
this.hit = function(){
this.leftSide = myGameArea.canvas.width - myGameArea.canvas.width
this.rightSide = myGameArea.canvas.width - this.width
this.top = myGameArea.canvas.height - myGameArea.canvas.height
this.bottom = myGameArea.canvas.height - this.height
if (this.x<this.leftSide){
 this.x = this.leftSide

}if (this.x1<this.leftSide) {
  this.x1 = this.leftSide
}
 if (this.x>this.rightSide){
  this.x = this.rightSide

}if (this.x1>this.rightSide) {
  this.x1 = this.rightSide
}
 if (this.y<this.top){
  this.y = this.top

}if (this.y1<this.top) {
  this.y1 = this.top
}
 if (this.y>this.bottom){
  this.y=this.bottom

  this.gravitySpeed = -(this.gravitySpeed*this.bounce)

}if (this.y1>this.bottom) {
  this.y1=this.bottom
  this.gravitySpeed1 = -(this.gravitySpeed1*this.bounce1)
}

}

} // its still not working so lets make a function to start the game
function updateGameArea() {
    myGameArea.clear()
    myGamePiece.newBox();
    myGamePiece.updatePos()


}

let player1;
let direction;
let jump;
let block1;
let framesPerSecond = 60;

function setup() {
  frameRate(framesPerSecond);
  createCanvas(700, 300);
  rectMode(CENTER);
  textAlign(CENTER);
  player1 = new player();
  block1 = new block(100, 275, 100, 50);
}

////////draw
function draw() {
  background(220);
  //function calls
  player1.move();
  block1.drawBox();
}

class player {

  constructor() {
    this.posX = 200;
    this.posXPast = 200;
    this.posY = 200;
    this.posYPast = 200;
    this.speedX = 0;
    this.speedY = 0;
    this.grounded = false;
    this.playerWidth = 40;
    this.playerHeight = 60;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      if (this.speedX < 0) {
        this.speedX -= 0.5;
      }
      else {
        this.speedX -= 1;
      }
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      if (this.speedX > 0) {
        this.speedX += 0.5;
      }
      else {
        this.speedX += 1
      }
    }
    else {
      if (this.speedX >=  1) {
        this.speedX -= 1;
      }
      else if (this.speedX <= -1) {
        this.speedX += 1;
      }
      else {
        this.speedX = 0;
      }
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(32)) {
      if (this.grounded) {
        this.speedY = -17;
        this.grounded = false;
      }
    }
    this.posX +=  this.speedX;
    if (this.speedX > 10) {
      this.speedX = 10;
    }
    if (this.speedX < -10) {
      this.speedX = -10;
    }
    if (this.posX >= width - this.playerWidth/2) {
      console.log("right");
      this.posX = width - this.playerWidth/2;
      this.speedX = 0;
    }
    if (this.posX <= this.playerWidth/2) {
      console.log("left");
      this.posX = this.playerWidth/2;
      this.speedX = 0;
    }
    
    //block 1 
    this.blockOverlap(block1);
    //console.log(this.posY + this.playerHeight/2);
    /*if (block1.inBlockX(this.posX - this.playerWidth/2, this.posX + this.playerWidth/2)
    && block1.inBlockY(this.posY + this.playerHeight/2))
    {
      console.log("overlap");
      if (block1.inBlockY(1+this.posY + this.playerHeight/2)) {
        this.speedY = 0;
        this.posY = this.posYPast;
        this.grounded = true;
      }
      else if (block1.inBlockX(this.posX - this.playerWidth/2, this.posX + this.playerWidth/2)) {
        this.speedX = 0; 
        this.posX = this.posXPast;
      }
    }*/

    this.gravity();

    //draw character
    fill(100, 30, 200);
    stroke(0);
    rect(this.posX, this.posY, this.playerWidth, this.playerHeight);
    this.posXPast = this.posX;
    this.posYPast = this.posY;
  }

  blockOverlap(block) {
    if (block.inBlockX(this.posX - this.playerWidth/2, this.posX + this.playerWidth/2)
    && block.inBlockY(this.posY + this.playerHeight/2))
    {
      console.log("overlap");
      if (block.inBlockY(1+this.posY + this.playerHeight/2)) {
        this.speedY = 0;
        this.posY = this.posYPast;
        this.grounded = true;
      }
      else if (block.inBlockX(this.posX - this.playerWidth/2, this.posX + this.playerWidth/2)) {
        this.speedX = 0; 
        this.posX = this.posXPast;
      }
    }
  }

  gravity() {
    this.posY += this.speedY;
    if (this.posY >= height - this.playerHeight/2) {
      this.grounded = true;
      this.posY = height - this.playerHeight/2;
      this.speedY = 0;
    }
    if (!this.grounded) {
      this.speedY += 1;
    }
  }
}

class block {
  constructor(bXPos, bYPos, bWidth, bHeight) {
    this.boxXPos = bXPos;
    this.boxYPos = bYPos;
    this.boxWidth = bWidth;
    this.boxHeight = bHeight;
  }

  drawBox () {
    rect(this.boxXPos, this.boxYPos, this.boxWidth, this.boxHeight);
  }

  //collission detector for the box's X value
  inBlockX (cord1, cord2) {
    if ((cord1 >= this.boxXPos - this.boxWidth/2 
    && cord1 <= this.boxXPos + this.boxWidth/2 )
    || (cord2 >= this.boxXPos - this.boxWidth/2 
    && cord2 <= this.boxXPos + this.boxWidth/2 )
    ) {
      return true;
    }
    return false;
  }

  //collission detector for the box's Y value
  inBlockY (cord) {
    if (cord <= this.boxYPos + this.boxHeight/2
    && cord >= this.boxYPos - this.boxHeight/2) {
      return true;
    }
    return false;
  }
}
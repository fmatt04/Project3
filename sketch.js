let player1;
let direction;
let jump;

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  player1 = new player();
}

////////draw
function draw() {
  background(220);
  //function calls
  player1.move();
}

class player {

  constructor() {
    this.posX = 200;
    this.posY = 200;
    this.speedX = 0;
    this.speedY = 0;
    this.grounded = false;
    this.playerWidth = 40;
    this.playerHeight = 60;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      if (this.speedX < 0) {
        this.speedX -= .5;
      }
      else {
        this.speedX -= 1;
      }
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      if (this.speedX > 0) {
        this.speedX += .5;
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
      console.log("1");
      if (this.grounded) {
        console.log("2");
        this.speedY = -15;
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
    this.gravity();

    //draw character
    fill(100, 30, 200);
    stroke(0);
    rect(this.posX, this.posY, this.playerWidth, this.playerHeight);
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
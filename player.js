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
  
      this.checkOverlap();
      this.gravity();
  
      if (keyIsDown(UP_ARROW) || keyIsDown(32)) {
        console.log(this.grounded);
        if (this.grounded) {
          this.speedY = -17;
          this.posY += this.speedY;
  
          this.grounded = false;
  
        }
      }
  
      //draw character
      fill(70, 170, 50);
      stroke(0);
      rect(this.posX, this.posY, this.playerWidth, this.playerHeight);
      this.posXPast = this.posX;
      this.posYPast = this.posY;
    }
  
  checkOverlap() {
    this.grounded = false;
    
    //block 1 
    this.blockOverlap(block1);
    //block 2
    this.blockOverlap(block2);
    //block 3
    this.blockOverlap(block3);
    //block 4
    this.blockOverlap(block4);
    //block 5
    this.blockOverlap(block5);
    //block 6
    this.blockOverlap(block6);
    //block 7
    this.blockOverlap(block7);
    //block 7
    this.blockOverlap(block8);
    //block 9
    this.blockOverlap(block9);
    //block 10
    this.blockOverlap(block10);
    //block 11
    this.blockOverlap(block11);
    //block 12
    this.blockOverlap(block12);
    //block 13
    this.blockOverlap(block13);
    //block 14
    this.blockOverlap(block14);
  }
  
    blockOverlap(block) {
      if (block.inBlockX(this.posX - this.playerWidth/2, this.posX + this.playerWidth/2)
      && (block.inBlockY(this.posY + this.playerHeight/2)
      || block.inBlockY(this.posY - this.playerHeight/2)))
      {
        if (block.onBlockY(1 + this.posY + this.playerHeight/2)) {
          this.speedY = 0;
          this.posY = block.boxYPos - block.boxHeight/2 - this.playerHeight/2;
          this.grounded = true;
        }
        else if (block.inBlockX(this.posX - this.playerWidth/2, this.posX + this.playerWidth/2)) {
          this.speedX = 0; 
          this.posX = this.posXPast;
          this.grounded = false;
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
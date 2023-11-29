class player {

    constructor() {
      this.posX = 200;
      this.posY = 200;
      this.speedX = 0;
      this.speedY = 0;
      this.grounded = false;
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
      if (this.speedX > 20) {
        this.speedX = 20;
      }
      this.gravity();
  
      //draw character
      fill(100, 30, 200);
      stroke(0);
      rect(this.posX, this.posY, 15, 30);
    }
  
    gravity() {
      this.posY += this.speedY;
      if (this.posY >= 485) {
        this.grounded = true;
        this.posY = 485;
        this.speedY = 0;
      }
      if (!this.grounded) {
        this.speedY += 1;
      }
    }
  }
class player {

  /*constructor for player class
  *this.posX = players x position
  *this.posXPast = the x position for the last frame
  *this.posY = players y position
  *this.posYPast = the y position for the last frame
  *this.speedX = players x speed
  *this.speedY = players y speed
  *this.grounded = if the player is on the ground
  *this.playerWidth = the width of the player
  *this.playerHeight = the height of the player
  *this.cycle = the walk cycle of the player (only 2 :( )
  *this.bakerIdle = The idle image for the player
  *this.bakerLeft1 = the first walk cycle image while moving left
  *this.bakerLeft2 = the second walk cycle image while moving left
  *this.bakerRight1 = the first walk cycle image while moving right
  *this.bakerRight2 = the second walk cycle image while moving right
  *this.jumpSound = the sound for the players jump
  */
  constructor() {
    this.posX = width / 2;
    this.posXPast = this.posX;
    this.posY = height - 31;
    this.posYPast = this.posY;
    this.speedX = 0;
    this.speedY = 0;
    this.grounded = false;
    this.playerWidth = 60;
    this.playerHeight = 90;
    this.cycle = false;
    this.bakerIdle = loadImage('Baker/BakerIdle.png');
    this.bakerLeft1 = loadImage('Baker/BakerLeft1.png');
    this.bakerLeft2 = loadImage('Baker/BakerLeft2.png');
    this.bakerRight1 = loadImage('Baker/BakerRight1.png');
    this.bakerRight2 = loadImage('Baker/BakerRight2.png');
    this.jumpSound = loadSound('Sounds/Jump.mp3');
  }

  //player moving function
  move() {
    //temp is so I only have to type the image call once
    let temp;
    //if the left arrow is down
    if (keyIsDown(LEFT_ARROW)) {
      //if player is moving right slow player down
      if (this.speedX < 0) {
        this.speedX -= 0.5;
      }
      //if player is moving left speed up
      else {
        this.speedX -= 1;
      }
      //player sprite
      if (this.cycle) {
        temp = this.bakerLeft1;
      }
      else {
        temp = this.bakerLeft2;
      }
    }
    //if the right arrow is down
    else if (keyIsDown(RIGHT_ARROW)) {
      //if the plaer is moving left slow down
      if (this.speedX > 0) {
        this.speedX += 0.5;
      }
      //if the player i moving right speed up
      else {
        this.speedX += 1
      }
      //player sprite
      if (this.cycle) {
        temp = this.bakerRight1;
      }
      else {
        temp = this.bakerRight2;
      }
    }
    //if right or left is not down
    else {
      //slow down!
      if (this.speedX >= 1) {
        this.speedX -= 1;
      }
      //slow down!
      else if (this.speedX <= -1) {
        this.speedX += 1;
      }
      //stop moving
      else {
        this.speedX = 0;
      }
      //player sprite
      temp = this.bakerIdle;
    }

    //actually move player
    this.posX += this.speedX;

    //make sure player is not moving too fase
    if (this.speedX > 10) {
      this.speedX = 10;
    }
    if (this.speedX < -10) {
      this.speedX = -10;
    }

    //make sure player cannot go out of the screen
    if (this.posX >= width - this.playerWidth / 2) {
      this.posX = width - this.playerWidth / 2;
      this.speedX = 0;
    }
    if (this.posX <= this.playerWidth / 2) {
      this.posX = this.playerWidth / 2;
      this.speedX = 0;
    }

    //collect coins??
    this.checkOverlap();
    //apply downwards force every frame
    this.gravity();

    //if up arrow is being pressed
    if (keyIsDown(UP_ARROW) || keyIsDown(32)) {
      console.log(this.grounded);
      //if player is on the ground, apply a jumping force (and play a fancy little sound)
      if (this.grounded) {
        this.speedY = -17;
        this.posY += this.speedY;
        this.jumpSound.play();
        this.grounded = false;

      }
    }

    if (subTimer % 30 == 0) {
      this.cycle = !this.cycle;
    }
    //draw character
    fill(70, 170, 50);
    stroke(0);
    image(temp, this.posX - this.playerWidth / 2, this.posY - this.playerHeight / 2, this.playerWidth, 90);

    //update past thins
    this.posXPast = this.posX;
    this.posYPast = this.posY;
  }

  //check overlap for all blocks
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

  //check overlap for block
  blockOverlap(block) {
    //if touching a block
    if (block.inBlockX(this.posX - this.playerWidth / 2, this.posX + this.playerWidth / 2)
      && (block.inBlockY(this.posY + this.playerHeight / 2)
        || block.inBlockY(this.posY - this.playerHeight / 2))) {
      //if the player is on top of a box make them grounded
      if (block.onBlockY(1 + this.posY + this.playerHeight / 2)) {
        this.speedY = 0;
        this.posY = block.boxYPos - block.boxHeight / 2 - this.playerHeight / 2;
        this.grounded = true;
      }
      //if the player is on the side of a box make the player not be able to move into the box
      else if (block.inBlockX(this.posX - this.playerWidth / 2, this.posX + this.playerWidth / 2)) {
        this.speedX = 0;
        this.posX = this.posXPast;
        this.grounded = false;
      }
    }
  }

  //apply a downwards force as long as the player is not grounded
  gravity() {
    this.posY += this.speedY;
    if (this.posY >= height - this.playerHeight / 2) {
      this.grounded = true;
      this.posY = height - this.playerHeight / 2;
      this.speedY = 0;
    }
    if (!this.grounded) {
      this.speedY += 1;
    }
  }
}
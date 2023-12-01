let player1;
let direction;
let jump;
let block1;
let block2;
let block3;
let block4;
let block5;
let block6;
let block7;
let block8;
let block9;
let block10;
let block11;
let block12;
let block13;
let block14;
let framesPerSecond = 60;
let canvas;

function setup() {
  frameRate(framesPerSecond);
  canvas = createCanvas(1400, 800);
  rectMode(CENTER);
  textAlign(CENTER);
  player1 = new player();
  block1 = new block(200, 775, 400, 50);
  block2 = new block(1200, 775, 400, 50);
  block3 = new block(700, 650, 150, 50);
  block4 = new block(700, 475, 400, 50);
  block5 = new block(300, 400, 200, 50);
  block6 = new block(1100, 400, 200, 50);
  block7 = new block(700, 300, 150, 50);
  block8 = new block(1350, 600, 100, 50);
  block9 = new block(50, 600, 100, 50);
  block10 = new block(700, 150, 350, 50);
  block11 = new block(1350, 450, 100, 50);
  block12 = new block(50, 450, 100, 50);
  block13 = new block(1100, 225, 100, 50);
  block14 = new block(300, 225, 100, 50);
}

////////draw
function draw() {
  background(220);
  //function calls
  player1.move();
  block1.drawBox();
  block2.drawBox();
  block3.drawBox();
  block4.drawBox();
  block5.drawBox();
  block6.drawBox();
  block7.drawBox();
  block8.drawBox();
  block9.drawBox();
  block10.drawBox();
  block11.drawBox();
  block12.drawBox();
  block13.drawBox();
  block14.drawBox();
}

class coin {
  constructor(x, y, num) {
    this.count = num;
    this.xPos = x;
    this.yPos = y;
    this.width = 20;
    this.height = 20;

  }

  overlap(x, y) {
    if ((player1.xPos - player1.width/2 >= this.xPos - this.width/2
    && player1.xPos - player1.width/2 <= this.xPos + this.width/2)
    || (player1.xPos + player1.width/2 >= this.xPos - this.width/2
    && player1.xPos + player1.width/2 <= this.xPos + this.width/2)) {
      if ((player1.yPos - player1.height/2 >= this.yPos - this.height/2
      && player1.yPos - player1.height/2 <= this.yPos + this.height/2)
      || (player1.yPos + player1.height/2 >= this.yPos - this.height/2
      && player1.yPos + player1.height/2 <= this.yPos + this.height/2)) {
        console.log("Coin");
        return count;
      }
    }
    return 0;
  }
}
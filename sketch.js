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
let cordArray;
let coin1;
let coin2; 
let coin3;
let coinCount;
let rightOrder;
let score = 0;
let timer = 0;

function setup() {
  frameRate(framesPerSecond);
  canvas = createCanvas(1400, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  cordArray = [new cord(300,170), new cord(1100,170), new cord(570,100), new cord(830,100), 
    new cord(700,100), new cord(550,420), new cord(850,420), 
    new cord(700,420), new cord(300,350), new cord(1100,350),
    new cord(700,250), new cord(50,390), new cord(1350,390), 
    new cord(700,590), new cord(50,720), new cord(1350,720), 
    new cord(700,770), new cord(50,550), new cord(1350,550)];

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
  coinCount = 1;
  rightOrder = true;

  let nums = threeRandNums(0, cordArray.length);
  console.log(nums);
  coin1 = new coin(cordArray[nums[0]].cordX, cordArray[nums[0]].cordY, 1);
  coin2 = new coin(cordArray[nums[1]].cordX, cordArray[nums[1]].cordY, 2);
  coin3 = new coin(cordArray[nums[2]].cordX, cordArray[nums[2]].cordY, 3);
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
  coin1.drawCoin();
  coin2.drawCoin();
  coin3.drawCoin();
  textSize(30);
  text("Score:" + score, 1200, 50);
}

function threeRandNums(bot, top) {
  let num1 = int(random(top) + bot);
  let num2 = int(random(top) + bot);
  let num3 = int(random(top) + bot);

  while (num2 == num1) {
    num2 = random(top) + bot;
  }

  while (num3 == num2 || num3 == num1) {
    num3 = random(top) + bot;
  }

  return [num1, num2, num3];
}

class coin {
  constructor(x, y, num) {
    this.count = num;
    this.xPos = x;
    this.yPos = y;
    this.width = 30;
    this.height = 30;
    this.collected = false;

  }

  coinCollect() {
    if (this.overlap() != 0) {
      if (this.overlap() == coinCount && rightOrder) {
        //do nothing :)
      }
      else {
        rightOrder = false
      }
      coinCount++;
      console.log(coinCount);
      if (coinCount == 4) {
        if (rightOrder) {
          score += 3
        }
        else {
          score += 1
        }
        coinCount = 1;
        rightOrder = true;
        coin1.collected = false;
        coin2.collected = false;
        coin3.collected = false;
        let nums = threeRandNums(0, cordArray.length);
        coin1.xPos = cordArray[nums[0]].cordX;
        coin1.yPos = cordArray[nums[0]].cordY;
        coin2.xPos = cordArray[nums[1]].cordX;
        coin2.yPos = cordArray[nums[1]].cordY;
        coin3.xPos = cordArray[nums[2]].cordX;
        coin3.yPos = cordArray[nums[2]].cordY;
      }
    }

  }

  overlap() {
    if (this.xPos > player1.posX - player1.playerWidth/2 && this.xPos < player1.posX + player1.playerWidth/2) {
      if (this.yPos > player1.posY - player1.playerHeight && this.yPos < player1.posY + player1.playerHeight) {
        console.log("Coin");
        this.collected = true;
        return this.count;
      }
    }
    return 0;
  }

  drawCoin() {
    if (!this.collected) {
      fill(252, 211, 3);
      ellipse(this.xPos, this.yPos, this.width, this.height);
      textSize(20);
      text(this.count, this.xPos, this.yPos + 7);
      this.coinCollect();
    }
  }
}

class cord {
  constructor(x,y) {
    this.cordX = x;
    this.cordY = y;
  }
}
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
let framesPerSecond;
let canvas;
let cordArray;
let coin1;
let coin2; 
let coin3;
let coinCount;
let rightOrder;
let score;
let timer;
let subTimer;
let gameState;
let startScreenImg;
let endScreenImg;
let controlsMenuImg;
let playBGImg;
let font1;


function setup() {
  startScreenImg = loadImage('Assets/Start Screen.png');
  endScreenImg = loadImage('Assets/End Screen.png');
  controlsMenuImg = loadImage('Assets/Controls Menu.png');
  playBGImg = loadImage('Assets/PlayBG.png');
  font1 = loadFont('Text/Angkor-Regular.ttf');
  textFont(font1);
  score = 0;
  timer = 40; //////////////////timer
  subTimer = 0;
  framesPerSecond = 60;
  gameState = "start screen";
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

  let nums = threeRandNums(0, cordArray.length-1);
  console.log(nums[0]);
  console.log(nums[1]);
  console.log(nums[2]);
  coin1 = new coin(cordArray[int(nums[0])].cordX, cordArray[int(nums[0])].cordY, 1);
  coin2 = new coin(cordArray[int(nums[1])].cordX, cordArray[int(nums[1])].cordY, 2);
  coin3 = new coin(cordArray[int(nums[2])].cordX, cordArray[int(nums[2])].cordY, 3);
}

////////draw
function draw() {
  //function calls
  if (gameState == "start screen") {
    startMenu();
  }
  else if (gameState == "play game") {
    gameDraw();
  }
  else if (gameState == "end screen") {
    endDraw();
  }
  else if (gameState == "controls menu") {
    controlsDraw();
  }
}

function controlsDraw() {
  image(controlsMenuImg, 0, 0, width, height);
  textSize(40);
  stroke(0);
  strokeWeight(2);
  if (mouseX < 450 && mouseX > 140 
    && mouseY < 660 && mouseY > 625) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("back to menu", 300, 660);

}

function startMenu() {
  image(startScreenImg, 0, 0, width, height);
  //background(255);
  textSize(60);
  
  stroke(0);
  strokeWeight(2);
  if (mouseX < width/2 + 180 && mouseX > width/2 - 180 
    && mouseY < height/2 + 10 && mouseY > height/2 - 50) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("play game", width/2, height/2);
  if (mouseX < width/2 + 135 && mouseX > width/2 - 135 
    && mouseY < height/2 + 110 && mouseY > height/2 + 70) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  textSize(40);
  text("how to play", width/2, height/2 + 100);
}

function endDraw() {
  image(endScreenImg, 0, 0, width, height);
  //background(255);
  textSize(45);
  fill(255, 238, 127);
  stroke(0);
  strokeWeight(2);
  text("Your Score is " + score + "!", width/2, height/2);

  if (mouseX < width/2 + 250 && mouseX > width/2 - 250
    && mouseY < height/2 + 100 && mouseY > height/2 + 60) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("back to start screen", width/2, height/2 + 100);

  if (mouseX < 380 && mouseX > 115 
    && mouseY < 670 && mouseY > 640) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("save score", 250, 670);
  
}

function mouseClicked() {
  if (gameState == "start screen") {
    if (mouseX < width/2 + 180 && mouseX > width/2 - 180 
    && mouseY < height/2 + 10 && mouseY > height/2 - 50) {
      gameState = "play game";
    }
    if (mouseX < width/2 + 135 && mouseX > width/2 - 135 
    && mouseY < height/2 + 110 && mouseY > height/2 + 70) {
      gameState = "controls menu";
    }
  }
  if (gameState == "play game") {
    
  }
  if (gameState == "end screen") {
    if (mouseX < width/2 + 250 && mouseX > width/2 - 250
    && mouseY < height/2 + 100 && mouseY > height/2 + 60) {
      setup();

    }
    if (mouseX < 380 && mouseX > 115 
      && mouseY < 670 && mouseY > 640) {
        saveCanvas("SpeedBaker");
    }

  }
  if (gameState == "controls menu") {
    if (mouseX < 450 && mouseX > 140 
      && mouseY < 660 && mouseY > 625) {
        gameState = "start screen";
      }
  }
}

function gameDraw() {
  image(playBGImg, 0, 0, width, height);
  //update player position and check platform collissions
  player1.move();
  //draw boxes
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
  //draw coins and check coin collissions
  coin1.drawCoin();
  coin2.drawCoin();
  coin3.drawCoin();
  //Score and  Timer
  timerCount()
  textSize(30);
  fill(255, 238, 127);
  text("Score: " + score, 1250, 50);
  text("Time Left: " + timer, 150, 50);
}

function timerCount() {
  subTimer++;
  if (subTimer == 60) {
    subTimer = 0;
    timer--;
  }

  if (timer == 0) {
    gameState = "end screen";
  }
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

class cord {
  constructor(x,y) {
    this.cordX = x;
    this.cordY = y;
  }
}
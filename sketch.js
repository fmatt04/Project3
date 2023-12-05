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
let font1;

function setup() {
  startScreenImg = loadImage('Assets/Start Screen.png');
  endScreenImg = loadImage('Assets/End Screen.png');
  controlsMenuImg = loadImage('Assets/Controls Menu.png');
  font1 = loadFont('Text/Angkor-Regular.ttf');
  textFont(font1);
  score = 0;
  timer = 30; //////////////////timer
  subTimer = 0;
  framesPerSecond = 60;
  gameState = "start screen";
  frameRate(framesPerSecond);
  canvas = createCanvas(1400, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  cordArray = [new cord(width*0.214,height*0.213), new cord(width*0.785,height*0.213), new cord(width*0.407,height*0.125), new cord(width*0.593,height*0.125), 
    new cord(width*0.5,height*0.125), new cord(width*0.393,height*0.525), new cord(width*0.608,height*0.525), 
    new cord(width*0.5,height*0.525), new cord(width*0.035,height*0.438), new cord(width*0.785,height*0.438),
    new cord(width*0.5,height*0.313), new cord(width*0.035,height*0.488), new cord(width*0.964,height*0.488), 
    new cord(width*0.5,height*0.738), new cord(width*0.035,height*0.900), new cord(width*0.964,height*0.900), 
    new cord(width*0.5,height*0.963), new cord(width*0.035,height*0.688), new cord(width*0.964,height*0.688)];

  player1 = new player();
  block1 = new block(width*0.143, height*0.969, width*0.286, height*0.063);
  block2 = new block(width*0.857, height*0.969, width*0.286, height*0.063);
  block3 = new block(width*0.500, height*0.813, width*0.107, height*0.063);
  block4 = new block(width*0.500, height*0.594, width*0.286, height*0.063);
  block5 = new block(width*0.214, height*0.500, width*0.143, height*0.063);
  block6 = new block(width*0.786, height*0.500, width*0.143, height*0.063);
  block7 = new block(width*0.500, height*0.375, width*0.107, height*0.063);
  block8 = new block(width*0.964, height*0.750, width*0.071, height*0.063);
  block9 = new block(width*0.036, height*0.750, width*0.071, height*0.063);
  block10 = new block(width*0.500, height*0.188, width*0.250, height*0.063);
  block11 = new block(width*0.964, height*0.563, width*0.071, height*0.063);
  block12 = new block(width*0.036, height*0.563, width*0.071, height*0.063);
  block13 = new block(width*0.786, height*0.281, width*0.071, height*0.063);
  block14 = new block(width*0.214, height*0.281, width*0.071, height*0.063);
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
  textSize(width*0.03);
  stroke(0);
  strokeWeight(2);
  if (mouseX < width*0.321 && mouseX > width*0.100 
    && mouseY < height*0.825 && mouseY > height*0.781) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("back to menu", width*0.214, height*0.825);

}

function startMenu() {
  image(startScreenImg, 0, 0, width, height);
  textSize(width*0.043);
  
  stroke(0);
  strokeWeight(2);
  if (mouseX < width*0.629 && mouseX > width*0.371
    && mouseY < height*0.513 && mouseY > height*.438) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("play game", width/2, height/2);
  if (mouseX < width*0.597 && mouseX > width*0.404 
    && mouseY < height*0.638 && mouseY > height*0.588) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  textSize(width*0.03);
  text("how to play", width*0.500, height*0.625);
}

function endDraw() {
  image(endScreenImg, 0, 0, width, height);
  //background(255);
  textSize(width*0.032);
  fill(255, 238, 127);
  stroke(0);
  strokeWeight(2);
  text("Your Score is " + score + "!", width*0.500, height*0.500);

  if (mouseX < width*0.679 && mouseX > width*0.321
    && mouseY < height*0.625 && mouseY > height*0.575) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("back to start screen", width*0.500, height*0.625);

  if (mouseX < width*0.271 && mouseX > width*0.082
    && mouseY < height*0.838 && mouseY > height*0.800) {
      fill(252, 140, 3);
    }
    else {
      fill(255, 238, 127);
    }
  text("save score", width*0.179, height*0.838);
  
}

function mouseClicked() {
  if (gameState == "start screen") {
    if (mouseX < width*0.629 && mouseX > width*0.371
      && mouseY < height*0.513 && mouseY > height*.438) {
      gameState = "play game";
    }
    if (mouseX < width*0.597 && mouseX > width*0.404 
      && mouseY < height*0.638 && mouseY > height*0.588) {
      gameState = "controls menu";
    }
  }
  if (gameState == "end screen") {
    if (mouseX < width*0.679 && mouseX > width*0.321
      && mouseY < height*0.625 && mouseY > height*0.575) {
      setup();

    }
    if (mouseX < width*0.271 && mouseX > width*0.082
      && mouseY < height*0.838 && mouseY > height*0.800) {
        saveCanvas("SpeedBaker");
    }

  }
  if (gameState == "controls menu") {
    if (mouseX < width*0.321 && mouseX > width*0.100 
      && mouseY < height*0.825 && mouseY > height*0.781) {
        gameState = "start screen";
      }
  }
}

function gameDraw() {
  background(220);
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
  fill(0);
  text("Score: " + score, 1300, 50);
  text("Time Left: " + timer, 100, 50);
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
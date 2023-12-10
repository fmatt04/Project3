//declare variables used in document
//player
let player1;
//canvas
let canvas;
//direction player if going
let direction;
//
let jump;
//all blocks
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
//fps
let framesPerSecond;
//all positions for coins
let cordArray;
//coin variables
let coin1;
let coin2;
let coin3;
//how many coins have been collected
let coinCount;
//are the coins being collected in the right order
let rightOrder;
//score
let score;
//timer
let timer;
//sub timer to count each tick
let subTimer;
//what is the current game state
let gameState;
//start screen image
let startScreenImg;
//end screen image
let endScreenImg;
//controls menu image
let controlsMenuImg;
//background image while playing game
let playBGImg;
//font in game
let font1;

//plays before the start of the code
function setup() {
  //instantiate canvas
  canvas = createCanvas(1400, 800);
  //center canvas
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
  //load all images
  startScreenImg = loadImage('Assets/Start Screen.png');
  endScreenImg = loadImage('Assets/End Screen.png');
  controlsMenuImg = loadImage('Assets/Controls Menu.png');
  playBGImg = loadImage('Assets/PlayBG.png');
  //load font
  font1 = loadFont('Text/Angkor-Regular.ttf');
  textFont(font1);
  //instantiate the score, timer, subtimer, and fps
  score = 0;
  timer = 40; //////////////////timer
  subTimer = 0;
  framesPerSecond = 60;
  //game starts on start screen game state
  gameState = "start screen";
  //declare fps
  frameRate(framesPerSecond);
  //center all modes
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  //instantiate all coordinates in the array
  cordArray = [new cord(300, 170), new cord(1100, 170), new cord(570, 100), new cord(830, 100),
  new cord(700, 100), new cord(550, 420), new cord(850, 420),
  new cord(700, 420), new cord(300, 350), new cord(1100, 350),
  new cord(700, 250), new cord(50, 390), new cord(1350, 390),
  new cord(700, 590), new cord(50, 720), new cord(1350, 720),
  new cord(700, 770), new cord(50, 550), new cord(1350, 550)];
  //instintiate player
  player1 = new player();
  //instantiate all blocks
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
  //coin thingys
  coinCount = 1;
  rightOrder = true;

  //put coins in places
  let nums = threeRandNums(0, cordArray.length - 1);
  console.log(nums[0]);
  console.log(nums[1]);
  console.log(nums[2]);
  coin1 = new coin(cordArray[int(nums[0])].cordX, cordArray[int(nums[0])].cordY, 1);
  coin2 = new coin(cordArray[int(nums[1])].cordX, cordArray[int(nums[1])].cordY, 2);
  coin3 = new coin(cordArray[int(nums[2])].cordX, cordArray[int(nums[2])].cordY, 3);
}

//plays each frame of the code
function draw() {
  //center canvas
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvas.position(x, y);

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

//draw loop when the game state is controls menu
function controlsDraw() {
  //draw background image
  image(controlsMenuImg, 0, 0, width, height);
  //text settings
  textSize(40);
  stroke(0);
  strokeWeight(2);
  //change color is mouse is over the text
  if (mouseX < 450 && mouseX > 140
    && mouseY < 660 && mouseY > 625) {
    fill(252, 140, 3);
  }
  else {
    fill(255, 238, 127);
  }
  //real text
  text("back to menu", 300, 660);

}

//draw loop when the game state is start menu
function startMenu() {
  //draw background image
  image(startScreenImg, 0, 0, width, height);
  //text settings
  textSize(60);
  stroke(0);
  strokeWeight(2);
  //fill if cursor over text
  if (mouseX < width / 2 + 180 && mouseX > width / 2 - 180
    && mouseY < height / 2 + 10 && mouseY > height / 2 - 50) {
    fill(252, 140, 3);
  }
  else {
    fill(255, 238, 127);
  }
  //draw text
  text("play game", width / 2, height / 2);
  //fill if over text
  if (mouseX < width / 2 + 135 && mouseX > width / 2 - 135
    && mouseY < height / 2 + 110 && mouseY > height / 2 + 70) {
    fill(252, 140, 3);
  }
  else {
    fill(255, 238, 127);
  }
  //new text size
  textSize(40);
  //draw text
  text("how to play", width / 2, height / 2 + 100);
}

//draw loop when the game state is end screen
function endDraw() {
  //draw background image
  image(endScreenImg, 0, 0, width, height);
  //text settings
  textSize(45);
  fill(255, 238, 127);
  stroke(0);
  strokeWeight(2);
  //draw score
  text("Your Score is " + score + "!", width / 2, height / 2);
  //text change color is curor is over it
  if (mouseX < width / 2 + 250 && mouseX > width / 2 - 250
    && mouseY < height / 2 + 100 && mouseY > height / 2 + 60) {
    fill(252, 140, 3);
  }
  else {
    fill(255, 238, 127);
  }
  //draw text
  text("back to start screen", width / 2, height / 2 + 100);

  //text change color if mouse is over it
  if (mouseX < 380 && mouseX > 115
    && mouseY < 670 && mouseY > 640) {
    fill(252, 140, 3);
  }
  else {
    fill(255, 238, 127);
  }
  //draw text
  text("save score", 250, 670);

}

//calls each time the mouse is pressed
function mouseClicked() {
  //activates if game state is start screen
  if (gameState == "start screen") {
    //if mouse is over play game switch game state to play game
    if (mouseX < width / 2 + 180 && mouseX > width / 2 - 180
      && mouseY < height / 2 + 10 && mouseY > height / 2 - 50) {
      gameState = "play game";
    }
    //if mouse is over controls menu switch gme state to controls menu
    if (mouseX < width / 2 + 135 && mouseX > width / 2 - 135
      && mouseY < height / 2 + 110 && mouseY > height / 2 + 70) {
      gameState = "controls menu";
    }
  }
  //activates if game state is end screen
  if (gameState == "end screen") {
    //if mouse is over back to menu restart the code
    if (mouseX < width / 2 + 250 && mouseX > width / 2 - 250
      && mouseY < height / 2 + 100 && mouseY > height / 2 + 60) {
      setup();

    }
    //if mouse is over save score save the canvas (file name SpeedBaker)
    if (mouseX < 380 && mouseX > 115
      && mouseY < 670 && mouseY > 640) {
      saveCanvas("SpeedBaker");
    }

  }
  //activates if game state is controls menu
  if (gameState == "controls menu") {
    //if mouse is over back to menu set game state to start screen
    if (mouseX < 450 && mouseX > 140
      && mouseY < 660 && mouseY > 625) {
      gameState = "start screen";
    }
  }
}

//draw loop for when 
function gameDraw() {
  //draw background image
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
  //increment timer
  timerCount()
  textSize(30);
  fill(255, 238, 127);
  text("Score: " + score, 1250, 50);
  text("Time Left: " + timer, 150, 50);
}

//imcrement timer
function timerCount() {
  //each frame subtimer is increased by one
  subTimer++;
  //if subtimer is 60, reset subtimer to 0 and subtract one to timer because framerate is 60 fps
  if (subTimer == 60) {
    subTimer = 0;
    timer--;
  }
  //if the timer is at 0, stop the game
  if (timer == 0) {
    gameState = "end screen";
  }
}

//returns three different integers that are not the same ranging from the first parameter to the second parameter
function threeRandNums(bot, top) {
  //3 random ints ranging from bot to top
  let num1 = int(random(top) + bot);
  let num2 = int(random(top) + bot);
  let num3 = int(random(top) + bot);

  //while num1 = num2 re-randomize num2
  while (num2 == num1) {
    num2 = random(top) + bot;
  }

  //while num1 = num3 or num2 = num3 re-randomize num 3
  while (num3 == num2 || num3 == num1) {
    num3 = random(top) + bot;
  }

  //return three different integers that are not the same ranging from the first parameter to the second parameter
  return [num1, num2, num3];
}

//cord class for coins
class cord {
  constructor(x, y) {
    this.cordX = x;
    this.cordY = y;
  }
}
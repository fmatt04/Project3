class coin {
  /* constructor for coin class
  *this.count = which coin this is
  *this.xPos = x position of coin
  *this.yPos = y position of coin
  *this.width = width of coin
  *this.height = height of coin
  *this.collected = if the coin is collected
  *this.flour = image for flour
  *this.sugar = image for sugar
  *this.egg = image for egg
  *this.grabSound = sound for grabbing coins
  */
  constructor(x, y, num) {
    this.count = num;
    this.xPos = x;
    this.yPos = y;
    this.width = 50;
    this.height = 50;
    this.collected = false;
    this.flour = loadImage('Sprites/Flour.png');
    this.sugar = loadImage('Sprites/Sugar.png');
    this.egg = loadImage('Sprites/Egg.png');
    this.grabSound = loadImage('Sounds/Get.mp3');

  }

  //on overlap collect the coin
  coinCollect() {
    //check if coin overlaps
    if (this.overlap() != 0) {
      //if the coin is the correct coin and the order is correct
      if (this.overlap() == coinCount && rightOrder) {
        //do nothing :)
      }
      //if the coin is not the correct coin or the order is already false make the order false
      else {
        rightOrder = false
      }
      //play dat sound
      this.grabSound.play();
      //increment  coin count
      coinCount++;
      //if all coins colleted, reset all coins and correct order
      if (coinCount == 4) {
        //if you collected the coins in the right order add 3 to score and add 2 to timer
        if (rightOrder) {
          score += 3
          timer += 2;
        }
        //if you did not collect the coins in the right order add 1 to the score and 1 to timer
        else {
          score += 1;
          timer += 1;
        }
        //reset all coin variables
        coinCount = 1;
        rightOrder = true;
        coin1.collected = false;
        coin2.collected = false;
        coin3.collected = false;
        //randomize coin positions
        let nums = threeRandNums(0, cordArray.length);
        coin1.xPos = cordArray[int(nums[0])].cordX;
        coin1.yPos = cordArray[int(nums[0])].cordY;
        coin2.xPos = cordArray[int(nums[1])].cordX;
        coin2.yPos = cordArray[int(nums[1])].cordY;
        coin3.xPos = cordArray[int(nums[2])].cordX;
        coin3.yPos = cordArray[int(nums[2])].cordY;
      }
    }

  }

  //calculates coin overlap
  overlap() {
    //is it overlapping? if so return the count of hte coin that it is overlapping
    if (this.xPos - this.width / 2 > player1.posX - player1.playerWidth / 2 && this.xPos - this.width / 2 < player1.posX + player1.playerWidth / 2
      || this.xPos + this.width / 2 > player1.posX - player1.playerWidth / 2 && this.xPos + this.width / 2 < player1.posX + player1.playerWidth / 2
      || this.xPos > player1.posX - player1.playerWidth / 2 && this.xPos < player1.posX + player1.playerWidth / 2) {
      if (this.yPos > player1.posY - player1.playerHeight && this.yPos < player1.posY + player1.playerHeight) {
        console.log("Coin");
        this.collected = true;
        return this.count;
      }
    }
    return 0;
  }

  //draw that coin!
  drawCoin() {
    //if the coin is not already collected draw the coin
    if (!this.collected) {
      //temp is so I only have to type tine image draw once
      let temp;
      //if the coin count is one make it draw flour
      if (this.count == 1) {
        temp = this.flour;
      }
      //if the coin count is two make it draw sugar
      if (this.count == 2) {
        temp = this.sugar;
      }
      //if the coin count is three make it draw egg
      if (this.count == 3) {
        temp = this.egg;
      }
      //draw the image
      image(temp, this.xPos - this.width / 2, this.yPos - this.height / 2, this.width, this.height);
      //check for collected coins
      this.coinCollect();
    }
  }
}
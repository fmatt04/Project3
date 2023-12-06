class coin {
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
            timer+=2;
          }
          else {
            score += 1;
            timer+=1;
          }
          coinCount = 1;
          rightOrder = true;
          coin1.collected = false;
          coin2.collected = false;
          coin3.collected = false;
          let nums = threeRandNums(0, cordArray.length);
          console.log(nums[0]);
          console.log(nums[1]);
          console.log(nums[2]);
          coin1.xPos = cordArray[int(nums[0])].cordX;
          coin1.yPos = cordArray[int(nums[0])].cordY;
          coin2.xPos = cordArray[int(nums[1])].cordX;
          coin2.yPos = cordArray[int(nums[1])].cordY;
          coin3.xPos = cordArray[int(nums[2])].cordX;
          coin3.yPos = cordArray[int(nums[2])].cordY;
        }
      }
  
    }
  
    overlap() {
      if (this.xPos - this.width/2 > player1.posX - player1.playerWidth/2 && this.xPos - this.width/2 < player1.posX + player1.playerWidth/2 
      || this.xPos + this.width/2 > player1.posX - player1.playerWidth/2 && this.xPos + this.width/2 < player1.posX + player1.playerWidth/2
      || this.xPos > player1.posX - player1.playerWidth/2 && this.xPos < player1.posX + player1.playerWidth/2) {
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
        let temp;
        if (this.count == 1) {
            temp = this.flour;
        }
        if (this.count == 2) {
            temp = this.sugar;
        }
        if (this.count == 3) {
            temp = this.egg;
        }
        image(temp, this.xPos  - this.width/2, this.yPos - this.height/2, this.width, this.height);
        this.coinCollect();
      }
    }
  }
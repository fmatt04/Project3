class block {
    constructor(bXPos, bYPos, bWidth, bHeight) {
      this.boxXPos = bXPos;
      this.boxYPos = bYPos;
      this.boxWidth = bWidth;
      this.boxHeight = bHeight;
      this.wood100 = loadImage('Sprites/Wood100.png');
      this.wood150 = loadImage('Sprites/Wood150.png');
      this.wood200 = loadImage('Sprites/Wood200.png');
      this.wood350 = loadImage('Sprites/wood350.png');
      this.wood400 = loadImage('Sprites/Wood400.png');
    }
  
    drawBox () {
      fill(150, 100, 50);
      rect(this.boxXPos, this.boxYPos, this.boxWidth, this.boxHeight);
      let temp;
      if (this.boxWidth == 100) {
        temp = this.wood100;
      }
      if (this.boxWidth == 150) {
        temp = this.wood150;
      }
      if (this.boxWidth == 200) {
        temp = this.wood200;
      }
      if (this.boxWidth == 350) {
        temp = this.wood350;
      }
      if (this.boxWidth == 400) {
        temp = this.wood400;
      }
      image(temp, this.boxXPos-this.boxWidth/2, this.boxYPos-this.boxHeight/2, this.boxWidth, this.boxHeight);
    }
  
    //collission detector for the box's X value
    inBlockX (cord1, cord2) {
      if ((cord1 >= this.boxXPos - this.boxWidth/2 
      && cord1 <= this.boxXPos + this.boxWidth/2 )
      || (cord2 >= this.boxXPos - this.boxWidth/2 
      && cord2 <= this.boxXPos + this.boxWidth/2 )
      ) {
        return true;
      }
      return false;
    }
  
    //collission detector for the box's Y value
    inBlockY (cord) {
      if (cord <= this.boxYPos + this.boxHeight/2
      && cord >= this.boxYPos - this.boxHeight/2) {
        return true;
      }
      return false;
    }
  
    onBlockY (cord) {
      if (cord <= this.boxYPos
      && cord >= this.boxYPos - this.boxHeight/2) {
        return true;
      }
      return false;
    }
  }
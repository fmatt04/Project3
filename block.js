class block {
    constructor(bXPos, bYPos, bWidth, bHeight) {
      this.boxXPos = bXPos;
      this.boxYPos = bYPos;
      this.boxWidth = bWidth;
      this.boxHeight = bHeight;
    }
  
    drawBox () {
      fill(150, 100, 50);
      rect(this.boxXPos, this.boxYPos, this.boxWidth, this.boxHeight);
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
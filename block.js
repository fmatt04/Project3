class block {

  /*constructor for block class
  *this.boxXPos = the x position of the box
  *this.boxYPos = the y position of the box
  *this.boxWidth = the width of the box
  *this.boxHeight = the height of the box
  *this.wood100 = image for the 100 width wood
  *this.wood150 = image for the 150 width wood
  *this.wood200 = image for the 200 width wood
  *this.wood350 = image for the 350 width wood
  *this.wood400 = image for the 400 width wood
  */
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

  //draw function for box
  drawBox() {
    //temp is temporary variable so I only had to type the image call once
    let temp;
    //if the box width is 100 make the image this.wood100
    if (this.boxWidth == 100) {
      temp = this.wood100;
    }
    //if the box width is 100 make the image this.wood150
    if (this.boxWidth == 150) {
      temp = this.wood150;
    }
    //if the box width is 100 make the image this.wood200
    if (this.boxWidth == 200) {
      temp = this.wood200;
    }
    //if the box width is 100 make the image this.wood350
    if (this.boxWidth == 350) {
      temp = this.wood350;
    }
    //if the box width is 100 make the image this.wood400
    if (this.boxWidth == 400) {
      temp = this.wood400;
    }
    //draw the image
    image(temp, this.boxXPos - this.boxWidth / 2, this.boxYPos - this.boxHeight / 2, this.boxWidth, this.boxHeight);
  }

  //collission detector for the box's X value
  inBlockX(cord1, cord2) {
    if ((cord1 >= this.boxXPos - this.boxWidth / 2
      && cord1 <= this.boxXPos + this.boxWidth / 2)
      || (cord2 >= this.boxXPos - this.boxWidth / 2
        && cord2 <= this.boxXPos + this.boxWidth / 2)
    ) {
      return true;
    }
    return false;
  }

  //collission detector for the box's Y value
  inBlockY(cord) {

    if (cord <= this.boxYPos + this.boxHeight / 2
      && cord >= this.boxYPos - this.boxHeight / 2) {
      return true;
    }
    return false;
  }

  //collission detector for the top of the box
  onBlockY(cord) {
    if (cord <= this.boxYPos
      && cord >= this.boxYPos - this.boxHeight / 2) {
      return true;
    }
    return false;
  }
}
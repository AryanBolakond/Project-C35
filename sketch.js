var balloon;
var BackGroundImage;

function preload(){
  BackGroundImage=loadImage("images/background.png")
}

function setup() {
  createCanvas(500,500);
  balloon=createSprite(650, 250, 50, 50);
  balloon.addImage("images/balloon.png")
  database=firebase.database();
}

function draw() {
  background(BackGroundImage);
  
  if (keyDown(LEFT_ARROW)){
    balloon.x= balloon.x-10
  }
  else if (keyDown(RIGHT_ARROW)){
    balloon.x= balloon.x+10
  }
  else if (keyDown(UP_ARROW)){
    balloon.y= balloon.y-10
  }
  else if (keyDown(DOWN_ARROW)){
    balloon.y= balloon.y-10
  }
  drawSprites();
}
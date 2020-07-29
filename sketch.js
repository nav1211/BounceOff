var movingRect, fixedRect
function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 200, 50, 100);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400,200,50,150);
  movingRect.shapeColor = "red";
  movingRect.velocityX = 3;
}

function draw() {
  background(255,255,255);
  bounceOff(fixedRect,movingRect);

  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}
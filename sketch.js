var movingRect,fixedRect

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(350, 200, 100, 60);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(30,200,70,100)
  movingRect.shapeColor = "blue";
  
  movingRect.velocityX = +5;
  fixedRect.velocityX = -5; 
}

function draw() {
  background(25,35,45);  
  
  if(keyWentDown("w")){

    movingRect.y = 350
    movingRect.x = 200
    fixedRect.y =  30
    fixedRect.x = 200
    movingRect.velocityY = -5
    movingRect.velocityX = 0
    fixedRect.velocityY = +5
    fixedRect.velocityX = 0
    
  } 
 
  bounceOff(movingRect,fixedRect)
     
 
  drawSprites();
}
  


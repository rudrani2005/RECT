var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(500,400,50,80);
  movingRect.shapeColor = "green";
  
}
//Collision algo
function draw() {
  background("black"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
/*
  if(movingRect.isTouching(fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }*/

if (movingRect.x - fixedRect.x <  movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x - movingRect.x <  movingRect.width/2+fixedRect.width/2 &&
   movingRect.y - fixedRect.y <  movingRect.height/2+fixedRect.height/2 &&
   fixedRect.y - movingRect.y <  movingRect.height/2+fixedRect.height/2 ){
 
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";


}
  drawSprites();
}
var ship,shipImage
var sea,seaImage

function preload(){
 shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 seaImage = loadImage("sea.png")


}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200)
  sea.addImage(seaImage)
  sea.velocityX = -2


ship = createSprite(130,200,30,30)
ship.addAnimation("moving",shipImage)
ship.scale = 0.4}

function draw() {
  background("blue");


  if(sea.x<0){
    sea.x = sea.width/8
  }
 drawSprites()

}
var seaimg,sea;
var shipimg,ship;
var shipimg2,ship2;
var shipimg3,ship3;
  
function preload(){
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  shipimg2 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  shipimg3 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaimg = loadImage("sea.png");
 
}

function setup(){
  createCanvas(1500,1000);
  //create sea background
 sea = createSprite (200,200,10,10);
 sea.addImage(seaimg);
 sea.x = sea.width/2;
 //creating ship
 ship = createSprite (120,255,10,10);
 ship.addAnimation("ship", shipimg);
 ship.scale = 0.3
// create second ship
 ship2 = createSprite (500,255,10,10);
 ship2.addAnimation("ship", shipimg2);
 ship2.scale = 0.35
//create third ship
ship3 = createSprite (900,255,10,10);
ship3.addAnimation("ship", shipimg3);
ship3.scale = 0.45
// i dont know how to add new images so i had to reuse it 
}

function draw() {
  background("blue");
  sea.velocityX = -3
  if(sea.x<0){
    sea.x=sea.width/2}
    drawSprites();
}
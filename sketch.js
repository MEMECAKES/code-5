var garden,rabbit,mouseX;
var gardenImg,rabbitImg;
var Apples,Leaves, appleImg,leavesImg;
var select_sprites; 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png"); 
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x=World.mouseX;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples()
  console.log(frameCount);

  drawSprites();

  
function spawnApples() {
  if (frameCount % 80==0) {
   if (select_sprites == 1){
     
   
  
    Apples = createSprite(random(50,350),40,10,10);
    Apples.addImage(appleImg);
    Apples.velocityY=3
    Apples.scale=0.1
    Apples.x=Math.round(random(10,80));
    rabbit.depth=rabbit.depth;
  }
  else{
    Leaves = createSprite(random(50,350),40,10,10);
    Leaves.addImage(leavesImg);
    Leaves.velocityY=3
    Leaves.scale=0.1
    Leaves.x=Math.round(random(10,80));
    rabbit.depth=rabbit.depth;
  }
}
  }
  if(Apples.isTouching(rabbit)){Apples.remove};
  if(Leaves.isTouching(Leaves)){Leaves.remove};
 }

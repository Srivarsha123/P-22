const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, package, helicopter, helicopterIMG, packageIMG, packageSprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
  createCanvas(400,400);

  packageSprite=createSprite(width/2, 80, 10,10);
  packageSprite.addImage(packageIMG)
  packageSprite.scale=0.2

  engine = Engine.create();
  world = engine.world;
  ground  = Bodies.rectangle(200,390,200,20,{isStatic:true})
  package = Bodies.circle(200, 100, 20, {restitution:0.5})
  World.add(world,ground)
  World.add(world,package)
  console.log(ground.position.x);

helicopter = createSprite(200, 100, 20, 20)
helicopter.addImage(helicopterIMG)
helicopter.scale = 0.7
}

function draw() {
  background(0);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  packageSprite.x= package.position.x 
  packageSprite.y= package.position.y 
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(packageSprite.position.x, packageSprite.position.y, 20, 20)
  if(keyDown("DOWN_ARROW")){
    Engine.update(engine) 
  }
  drawSprites();
}




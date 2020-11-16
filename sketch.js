var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
//wall1
wall1 = Bodies.rectangle(300, 640, 20, 70);
World.add(world, wall1);

//wall2
wall2 = Bodies.rectangle(500, 630, 20, 70);
World.add(world, wall2);

//wall3
wall3 = Bodies.rectangle(400, 640, 180, 20);
World.add(world, wall3);
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  //wall1
  fill("red");
  rectMode(CENTER);
  rect(wall1.position.x, wall1.position.y, 20, 70);
//wall2
  fill("red");
  rectMode(CENTER);
  rect(wall2.position.x, wall2.position.y, 20, 70);
 //wall3 
 fill("red");
 rectMode(CENTER);
 rect(wall3.position.x, wall3.position.y, 180, 20)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);

    
  }
}




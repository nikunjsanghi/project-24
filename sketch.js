
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin1,dustbin2,dustbin3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
    ball         =  new Paper(100,100,20,20);

    ground     =  new Ground(490,394,1900,20);

    dustbin1    = new Dustbin(920,350,20,50);

    dustbin2    = new Dustbin(1080,350,20,50);

   dustbin3     = new Dustbin(1000,380,190,20);

	World.add(world,ball);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ball.display();

  ground.display();

  dustbin1.display();
  
  dustbin2.display();

  dustbin3.display();

  
   keyPressed();
 
}


function keyPressed(){
   
	if(keyCode === UP_ARROW){
   
	Matter.Body.applyForce(ball.body,ball.body.position,{x:1.3,y:-5})
   
	}
   
 }
   



var ball,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

     var options = {
		 
		 restitution : 0.3,
		 friction : 0.5,
		 density : 1.2
	 }

	 var ground_options = {
        isStatic  : true
	 }
     ball = Bodies.circle(30,20,20,options)
	World.add(world, ball);

	ground = Bodies.rectangle(400,680,800,20,ground_options);
	World.add(world,ground);


	base = new Dustbin(650,675,200,10);
	leftEdge = new Dustbin(550,625,20,100);
	rightEdge = new Dustbin(750,625,20,100);
    
      
	Engine.run(engine);  
}


function draw() {
     background(0);	

  ellipseMode (RADIUS);	
  ellipse(ball.position.x,ball.position.y,20);

    fill("white");
    rectMode  (CENTER);
    rect  (ground.position.x,ground.position.y,800,20);

  base.display();
  leftEdge.display();
  rightEdge.display();
   

  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60});
		
	}
}




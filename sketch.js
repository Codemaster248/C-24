
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var circle,ground,box1,hammer;



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	box1 = new Stone(700,320,70,70);
	hammer = new Hammer(200,200,100,30);
	circle = new Circle(800,20,20,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  ground.display();
  circle.display();
  box1.display();
  hammer.display();
 
}




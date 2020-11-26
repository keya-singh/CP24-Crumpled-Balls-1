
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1, box2, box3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(120,650,5);
	ground = new Ground(590,height,1200,20)


	Engine.run(engine);



	
	box1 = new Box(570,680,200,20);
	box2 = new Box(470,655,20,70);
	box3 = new Box(670,655,20,70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
 
 
 
}


function keyPressed () {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 3, y : -3})
	}
}

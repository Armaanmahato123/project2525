var dustbinIMG , ballIMG;
var ground, ball, dustbin;
var ballSprite, ballBody , dustbinSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	

	ball=new Ball(200, 400, 70);
	

	dustbin= new Dustbin(700,655);
	ground=new Ground(width/2, height-35, width,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ball.display();
  dustbin.display();
  ground.display();
  
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-100})
	}

	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-50})
	}
}


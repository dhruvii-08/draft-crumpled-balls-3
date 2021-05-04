const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var box1, box2, box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var paperBody = Bodies.circle(100,650,70,{restitution:0.2, isStatic:false});
	World.add(world, paperBody);

	var options = {
        isStatic: true
    }

	ground = Bodies.rectangle(350,700,900,20, options)
    World.add(world,ground)

	paper = new Paper(100,630,70);
	dustbin1 = new Dustbin(700,590,100,100)
	
	Engine.run(engine);
  
}

function draw() {  
  background("white");  
	Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 900,20)
  paper.display();

	dustbin1.display();

  drawSprites();
		
	}
function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
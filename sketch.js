
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box,b1ox;

// function preload(){
// 	Polygon = loadImage("POLYGON.png");
// }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//Grounds
	ground1 = new Ground(width/2,590,width,20);
	ground2 = new Ground(800,450,400,10);
	ground3 = new Ground(1100,250,150,10);
	groundV = new Ground(width,height/2,10,height);

	// box = new Box(200,200);
	box = new Boxes(200,200,40,40);
	// box.body.position.x = mouseX;

	//row1
	box1 = new Box(700,400);
	box2 = new Box(730,400);
	box3 = new Box(760,400);
	box4 = new Box(790,400);
	box5 = new Box(820,400);
	box6 = new Box(850,400);
	box7 = new Box(880,400);
	//row2
	box8 = new Box(730,360);
	box9 = new Box(760,360);
	box10 = new Box(790,360);
	box11 = new Box(820,360);
	box12 = new Box(850,360);
	//rox3
	box13 = new Box(760,320);
	box14 = new Box(790,320);
	box15 = new Box(820,320);
	//row4
	box16 = new Box(790,280);

	//row1
	boxT1 = new Box(1070,170);
	boxT2 = new Box(1100,170);
	boxT3 = new Box(1130,170);
	//row2
	boxT4 = new Box(1085,140);
	boxT5 = new Box(1115,140);
	//row3
	boxT6 = new Box(1100,90);

	slingShot = new Slingshot(box.body,{x:200,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2);
  ground1.display();
  ground2.display();
  ground3.display();
  groundV.display();
  //the striker
  box.display();
//   b1ox.display();
  //pyramid
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  boxT1.display();
  boxT2.display();
  boxT3.display();
  boxT4.display();
  boxT5.display();
  boxT6.display();
  slingShot.display();

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(box.body);
    }
}

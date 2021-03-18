const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine, myworld, ground, box1, box2;

function setup() {
  createCanvas(600,600);
  myengine=Engine.create();
  myworld=myengine.world;


  ground= new Ground(300, 560, 600, 30);
  box1=new Box(200,300,50,50);
  box2=new Box(240,200,50,100);
}


function draw() {
  background(0);  
  
  Engine.update(myengine);
  
  box1.display();
  box2.display();
  ground.display();
}
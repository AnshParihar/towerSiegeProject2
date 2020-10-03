const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400,380,800,20)
  platform1 = new Ground(350,300,150,10)
  platform2 = new Ground(600,200,150,10)
  box1 = new Box(350,275,40,40)
  box2 = new Box(310,275,40,40)
  box3 = new Box(390,275,40,40)
  box4 = new Box(330,235,40,40)
  box5 = new Box(370,235,40,40)
  box6 = new Box(350,195,40,40)
  box7 = new Box(600,175,40,40)
  box8 = new Box(560,175,40,40)
  box9 = new Box(640,175,40,40)
  box10 = new Box(580,135,40,40)
  box11 = new Box(620,135,40,40)
  box12 = new Box(600,95,40,40)
  ball = new Ball(130,100,20)
  slingshot = new SlingShot(ball.body,{x:130,y:100})
}

function draw() {
  background("black");
  Engine.update(engine)
  ground.display();
  platform1.display();
  platform2.display();  
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
  ball.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(ball.body)
  }
}
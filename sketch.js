const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,backgroundImg,stand;
var box1,box2,box3,box4,box5,box6;
var ball;
var score = 0;

function preload() {
  //backgroundImg = loadImage("sprites/bg.png");
  getTime();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height-35,300,10)
  box1 = new Box(610,335,70,70);
  box2 = new Box(605,335,70,70);
  box3 = new Box(600,305,70,70);
  box4 = new Box(610,295,70,70);
  box5 = new Box(615,335,70,70);
  box6 = new Box(620,305,70,70);
  ball = new Ball(10,300,20)
  slingshot = new SlingShot(ball.body,{x:100, y:300});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    }
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  slingshot.display();
  text("score:"+score,width-300,50);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body)
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json()
  var time = responseJSON.datetime 
  var hour = time.slice(11,13)
  console.log(hour)
  if(hour>=06 && hour<=18){
      bg="sprites/bg.png"
  }
  else{
      bg = "sprites/bg2.jpg"
  }
  backgroundImg = loadImage(bg)
}
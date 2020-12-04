const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, log5;
var Score = 0
var R1

function preload() {

}


function setup() {
  createCanvas(800,800);
engine = Engine.create();
world = engine.world;

Item1 = new Item(200, 200, 50, 50)
Item2 = new Item(300, 250, 50, 40)
}

function draw() {
  background("white");  
 Engine.update(engine);
  rectMode(CENTER);

  textSize(35)
  fill("Black")
  text("Score: " + Score, width - 300, 50)

Item1.display()
Item2.display()
}

function mouseDragged() {
Matter.Body.setPosition(Item1.body, {x: mouseX, y: mouseY})  
}

function mouseReleased() {
  Matter.Body.setPosition(Item1.body, {x: mouseX, y: mouseY})  
}


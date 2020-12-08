const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Render = Matter.Render;
const Events = Matter.Events;

var engine, world, log5;
var Score = 0
var R1
var goodBP, butter, eggs, flour, milk, sugar
var badBP, book, clock, comp, FB, GC, HP, phone, pillow, pin, plastic, wires
var mouseConstraint, mouse

function preload() {
goodBP = loadImage("Ingredients/Baking Powder.png")
butter = loadImage("Ingredients/Butter.jpg")
eggs = loadImage("Ingredients/Eggs.png")
flour = loadImage("Ingredients/Flour.jpg")
milk = loadImage("Ingredients/Milk.jpg")
sugar = loadImage("Ingredients/Sugar.jpg")
badBP = loadImage("Trash/Banana Peel.jpg")
book = loadImage("Trash/Book.jpg")
clock = loadImage("Trash/Clock.png")
comp = loadImage("Trash/Computer.png")
FB = loadImage("Trash/Fish Bone.png")
GC = loadImage("Trash/Garbage Can.png")
HP = loadImage("Trash/Headphones.png")
phone = loadImage("Trash/Phone.png")
pillow = loadImage("Trash/Pillow.jpg")
pin = loadImage("Trash/Pin.jpg")
plastic = loadImage("Trash/Plastic.png")
wires = loadImage("Trash/Wires.jpg")
}


function setup() {
  createCanvas(800,800);
engine = Engine.create();
world = engine.world;

Item1 = new Item(200, 200, 50, 50)
Item2 = new Item(300, 250, 50, 40)
mouse = Mouse.create(Render.canvas)
mouseConstraint = MouseConstraint.create(engine,{
  mouse: mouse,
  constraint: {stiffness: 0.2, render:{visible: false}}
}) 
World.add(world, mouseConstraint)
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
if(mouseConstraint.body){
  var pos = mouseConstraint.body.position
  var posi1 = Item1.body.position
  //if(pos == posi1) {
    Item1.body.height = 100
  //}
}
}

//function mouseDragged() {
//Matter.Body.setPosition(Item1.body, {x: mouseX, y: mouseY})  
//}

/*function mouseReleased() {
  Matter.Body.setPosition(Item1.body, {x: mouseX, y: mouseY})  
  Item3 = new Item(mouseX, mouseY, 50, 70)
  Item3.display()
}*/


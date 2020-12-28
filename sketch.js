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
var r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0, r6 = 0
var gameState = 0
var clicked = 0

function preload() {
cake = loadImage("Cake.PNG")

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
  createCanvas(1000, 1000);
engine = Engine.create();
world = engine.world;

cake1 = createSprite(500, 800, 10, 10)
cake1.addImage(cake)
cake1.visible = false

butter1 = createSprite(200, 200, 5, 5)
clock1 = createSprite(400, 200, 5, 5)
comp1 = createSprite(600, 200, 5, 5)
butter1.addImage(butter)
clock1.addImage(clock)
comp1.addImage(comp)

eggs1 = createSprite(200, 300, 5, 5)
plastic1 = createSprite(400, 300, 5, 5)
wires1 = createSprite(600, 300, 5, 5)
eggs1.addImage(eggs)
plastic1.addImage(plastic)
wires1.addImage(wires)
eggs1.visible = false
plastic1.visible = false
wires1.visible = false

goodBP1 = createSprite(200, 400, 10, 10)
book1 = createSprite(400, 400, 10, 10)
fish1 = createSprite(600, 400, 10, 10)
goodBP1.addImage(goodBP)
book1.addImage(book)
fish1.addImage(FB)
goodBP1.visible = false
book1.visible = false
fish1.visible = false

flour1 = createSprite(200, 500, 10, 10)
badBP1 = createSprite(400, 500, 10, 10)
hp1 = createSprite(600, 500, 10, 10)
badBP1.addImage(badBP)
flour1.addImage(flour)
hp1.addImage(HP)
badBP1.visible = false
flour1.visible = false
hp1.visible = false

milk1 = createSprite(200, 600, 10, 10)
gc1 = createSprite(400, 600, 10, 10)
phone1 = createSprite(600, 600, 10, 10)
milk1.addImage(milk)
gc1.addImage(GC)
phone1.addImage(phone)
milk1.visible = false
gc1.visible = false
phone1.visible = false

sugar1 = createSprite(200, 700, 10, 10)
pillow1 = createSprite(400, 700, 10, 10)
pin1 = createSprite(600, 700, 10, 10)
sugar1.addImage(sugar)
pillow1.addImage(pillow)
pin1.addImage(pin)
sugar1.visible = false
pillow1.visible = false
pin1.visible = false

goodBP2 = createSprite(100, 500, 10, 10)
butter2 = createSprite(250, 500, 10, 10)
eggs2 = createSprite(400, 500, 10, 10)
flour2 = createSprite(550, 500, 10, 10)
milk2 = createSprite(700, 500, 10, 10)
sugar2 = createSprite(950, 500, 10, 10)
goodBP2.addImage(goodBP)
butter2.addImage(butter)
eggs2.addImage(eggs)
flour2.addImage(flour)
milk2.addImage(milk)
sugar2.addImage(sugar)
goodBP2.visible = false
butter2.visible = false
eggs2.visible = false
flour2.visible = false
milk2.visible = false
sugar2.visible = false

/*mouse = Mouse.create(Render.canvas)
mouseConstraint = MouseConstraint.create(engine,{
  mouse: mouse,
  constraint: {stiffness: 0.2, render:{visible: false}}
}) 
World.add(world, mouseConstraint)*/
}

function draw() {
  background("white");  
 Engine.update(engine);
  rectMode(CENTER);

if(gameState == 0) {

if(mousePressedOver(butter1)) {
  clock1.visible = false
  comp1.visible = false
  r1 = 1
  clicked = 1
  textSize(25)
text("You have selected butter!",  300, 300)
}
if(mousePressedOver(clock1) || mousePressedOver(comp1)) {
  clock1.visible = false
  comp1.visible = false
  butter1.visible = false
  clicked = 1
  textSize(25)
  text("You have slected the wrong item!", 300, 300)
}
if(clicked == 1) {
  gameState = 1
  butter1.destroy()
  clock1.destroy()
  comp1.destroy()
  clicked = 0
}
}

if(gameState == 1) {
eggs1.visible = true
plastic1.visible = true
wires1.visible = true

console.log(clicked)
  if(mousePressedOver(eggs1)) {
    plastic1.visible = false
    wires1.visible = false
    r2 = 1
    clicked = 1
    textSize(25)
  text("You have selected eggs!",  300, 300)
  }
  if(mousePressedOver(plastic1) || mousePressedOver(wires1)) {
    plastic1.visible = false
    wires1.visible = false
    eggs1.visible = false
    clicked = 1
    textSize(25)
    text("You have slected the wrong item!", 300, 300)
  }
  if(clicked == 1) {
    gameState = 2
    eggs1.destroy()
  plastic1.destroy()
  wires1.destroy()
    clicked = 0
  }
  }

  if(gameState == 2) {
    goodBP1.visible = true
    book1.visible = true
    fish1.visible = true
    
      if(mousePressedOver(goodBP1)) {
        book1.visible = false
        fish1.visible = false
        r3 = 1
        clicked = 1
        textSize(25)
      text("You have selected Baking Powder!",  300, 300)
      }
      if(mousePressedOver(book1) || mousePressedOver(fish1)) {
        book1.visible = false
        fish1.visible = false
        goodBP1.visible = false
        clicked = 1
        textSize(25)
        text("You have slected the wrong item!", 300, 300)
      }
      if(clicked == 1) {
        gameState = 3
        goodBP1.destroy()
      book1.destroy()
      fish1.destroy()
        clicked = 0
      }
      }

      if(gameState == 3) {
        flour1.visible = true
        badBP1.visible = true
        hp1.visible = true
        
          if(mousePressedOver(flour1)) {
            badBP1.visible = false
            hp1.visible = false
            r4 = 1
            clicked = 1
            textSize(25)
          text("You have selected flour!",  300, 300)
          }
          if(mousePressedOver(badBP1) || mousePressedOver(hp1)) {
            flour1.visible = false
            badBP1.visible = false
            hp1.visible = false
            clicked = 1
            textSize(25)
            text("You have selected the wrong item!", 300, 300)
          }
          if(clicked == 1) {
            gameState = 4
            flour1.destroy()
          badBP1.destroy()
          hp1.destroy()
            clicked = 0
          }
          }

          if(gameState == 4) {
            milk1.visible = true
            gc1.visible = true
            phone1.visible = true
            
              if(mousePressedOver(milk1)) {
                gc1.visible = false
                phone1.visible = false
                r5 = 1
                clicked = 1
                textSize(25)
              text("You have selected milk!",  300, 300)
              }
              if(mousePressedOver(gc1) || mousePressedOver(phone1)) {
                milk1.visible = false
                gc1.visible = false
                phone1.visible = false
                clicked = 1
                textSize(25)
                text("You have selected the wrong item!", 300, 300)
              }
              if(clicked == 1) {
                gameState = 5
                milk1.destroy()
              gc1.destroy()
              phone1.destroy()
                clicked = 0
              }
              }  

              if(gameState == 5) {
                sugar1.visible = true
                pillow1.visible = true
                pin1.visible = true
                
                  if(mousePressedOver(sugar1)) {
                    pillow1.visible = false
                    pin1.visible = false
                    r6 = 1
                    clicked = 1
                    textSize(25)
                  text("You have selected sugar!",  300, 300)
                  }
                  if(mousePressedOver(pillow1) || mousePressedOver(pin1)) {
                    sugar1.visible = false
                    pillow1.visible = false
                    pin1.visible = false
                    clicked = 1
                    textSize(25)
                    text("You have selected the wrong item!", 300, 300)
                  }
                  if(clicked == 1) {
                    gameState = 6
                    sugar1.destroy()
                  pillow1.destroy()
                  pin1.destroy()
                    clicked = 0
                  }
                  }      
                  
                  if(gameState == 6) {
                    if(r1 == 1 && r2 == 1 && r3 == 1 && r4 == 1 && r5 == 1 && r6 == 1) {
                      goodBP2.visible = true
                      butter2.visible = true 
                      eggs2.visible = true 
                      flour2.visible = true
                      milk2.visible = true
                      sugar2.visible = true
                      cake1.visible = true
                    textSize(15)
                    text("Congratulations!", 800, 800)
                    text("You have made a cake!", 800, 850)
                    }
                  }
drawSprites()

}


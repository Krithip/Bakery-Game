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
var r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0, r6 = 0, r7 = 0, w1 = 0, w2 = 0, w3 = 0, w4 = 0, w5 = 0, w6 = 0
var wc = 0
var gameState = 0
var clicked = 0

function preload() {
cake = loadImage("Cake.PNG")
wcake = loadImage("Wrong Cake.PNG")

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

cake1 = createSprite(500, 200, 10, 10)
cake1.addImage(cake)
cake1.visible = false
wcake1 = createSprite(500, 200, 10, 10)
wcake1.addImage(wcake)
wcake1.visible = false

butter1 = createSprite(150, 200, 5, 5)
butter1.scale = (0.9)
clock1 = createSprite(450, 200, 5, 5)
comp1 = createSprite(750, 200, 5, 5)
comp1.scale = (0.9)
butter1.addImage(butter)
clock1.addImage(clock)
comp1.addImage(comp)

eggs1 = createSprite(150, 300, 5, 5)
eggs1.scale = (.25)
plastic1 = createSprite(450, 300, 5, 5)
wires1 = createSprite(750, 300, 5, 5)
wires1.scale = (0.75)
eggs1.addImage(eggs)
plastic1.addImage(plastic)
wires1.addImage(wires)
eggs1.visible = false
plastic1.visible = false
wires1.visible = false

goodBP1 = createSprite(150, 400, 5, 5)
book1 = createSprite(450, 400, 5, 5)
fish1 = createSprite(750, 400, 5, 5)
goodBP1.addImage(goodBP)
book1.addImage(book)
fish1.addImage(FB)
goodBP1.visible = false
book1.visible = false
fish1.visible = false

flour1 = createSprite(150, 500, 5, 5)
badBP1 = createSprite(450, 500, 5, 5)
hp1 = createSprite(750, 500, 5, 5)
hp1.scale = (0.45)
badBP1.addImage(badBP)
flour1.addImage(flour)
hp1.addImage(HP)
badBP1.visible = false
flour1.visible = false
hp1.visible = false

milk1 = createSprite(150, 600, 5, 5)
gc1 = createSprite(450, 600, 5, 5)
gc1.scale = (0.35)
phone1 = createSprite(750, 600, 5, 5)
phone1.scale = (0.35)
milk1.addImage(milk)
gc1.addImage(GC)
phone1.addImage(phone)
milk1.visible = false
gc1.visible = false
phone1.visible = false

sugar1 = createSprite(150, 700, 5, 5)
pillow1 = createSprite(450, 700, 5, 5)
pin1 = createSprite(750, 700, 5, 5)
sugar1.addImage(sugar)
pillow1.addImage(pillow)
pin1.addImage(pin)
sugar1.visible = false
pillow1.visible = false
pin1.visible = false

goodBP2 = createSprite(100, 500, 5, 5)
butter2 = createSprite(450, 500, 5, 5)
eggs2 = createSprite(750, 500, 5, 5)
eggs2.scale = (0.35)
flour2 = createSprite(100, 750, 5, 5)
milk2 = createSprite(450, 750, 5, 5)
sugar2 = createSprite(750, 750, 5, 5)
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
}
if(mousePressedOver(clock1) || mousePressedOver(comp1)) {
  clock1.visible = false
  comp1.visible = false
  butter1.visible = false
  w1 = 1
  clicked = 1
}
if(clicked == 1) {
  gameState = 1
  butter1.destroy()
  clock1.destroy()
  comp1.destroy()
  clicked = 0
}
}

else if(gameState == 1) {
  for(var i = 0; i < 10; i++) { 
    if(r1 == 1) {
    textSize(25)
    text("You have selected butter!",  100, 50)
  }
  }
  for(var i = 0; i < 10; i++) { 
    if(w1 == 1) {
    textSize(25)
    text("You have selected the wrong item!",  100, 50)
  wc = 1
  }
  }
  eggs1.visible = true
plastic1.visible = true
wires1.visible = true
console.log(clicked)

  if(mousePressedOver(eggs1)) {
    plastic1.visible = false
    wires1.visible = false
    r2 = 1
    clicked = 1
  }
  if(mousePressedOver(plastic1) || mousePressedOver(wires1)) {
    plastic1.visible = false
    wires1.visible = false
    eggs1.visible = false
    w2 = 1
    clicked = 1
  }
  if(clicked == 1) {
    gameState = 2
    eggs1.destroy()
  plastic1.destroy()
  wires1.destroy()
    clicked = 0
  }
}

  else if(gameState == 2) {
    for(var i = 0; i < 10; i++) { 
      if(r2 == 1) {
      textSize(25)
      text("You have selected eggs!",  100, 50)
    }
    }
    for(var i = 0; i < 10; i++) { 
      if(w2 == 1) {
      textSize(25)
      text("You have selected the wrong item",  100, 50)
    wc = 1
    }
    }
    goodBP1.visible = true
    book1.visible = true
    fish1.visible = true
    console.log(clicked)

      if(mousePressedOver(goodBP1)) {
        book1.visible = false
        fish1.visible = false
        r3 = 1
        clicked = 1
      }
      if(mousePressedOver(book1) || mousePressedOver(fish1)) {
        book1.visible = false
        fish1.visible = false
        goodBP1.visible = false
        w3 = 1
        clicked = 1
      }
      if(clicked == 1) {
        gameState = 3
        goodBP1.destroy()
      book1.destroy()
      fish1.destroy()
        clicked = 0
      }
      }

      else if(gameState == 3) {
        for(var i = 0; i < 10; i++) { 
          if(r3 == 1) {
          textSize(25)
          text("You have selected baking powder!",  100, 50)
        }
        }
        for(var i = 0; i < 10; i++) { 
          if(w3 == 1) {
          textSize(25)
          text("You have selected the wrong item",  100, 50)
        wc = 1
        }
        }
        flour1.visible = true
        badBP1.visible = true
        hp1.visible = true
        console.log(clicked)

          if(mousePressedOver(flour1)) {
            badBP1.visible = false
            hp1.visible = false
            r4 = 1
            clicked = 1
          }
          if(mousePressedOver(badBP1) || mousePressedOver(hp1)) {
            flour1.visible = false
            badBP1.visible = false
            hp1.visible = false
            w4 = 1
            clicked = 1
          }
          if(clicked == 1) {
            gameState = 4
            flour1.destroy()
          badBP1.destroy()
          hp1.destroy()
            clicked = 0
          }
          }

          else if(gameState == 4) {
            for(var i = 0; i < 10; i++) { 
              if(r4 == 1) {
              textSize(25)
              text("You have selected flour!",  100, 50)
            }
            }
            for(var i = 0; i < 10; i++) { 
              if(w4 == 1) {
              textSize(25)
              text("You have selected the wrong item",  100, 50)
            wc = 1
            }
            }
            milk1.visible = true
            gc1.visible = true
            phone1.visible = true
            console.log(clicked)

              if(mousePressedOver(milk1)) {
                gc1.visible = false
                phone1.visible = false
                r5 = 1
                clicked = 1
              }
              if(mousePressedOver(gc1) || mousePressedOver(phone1)) {
                milk1.visible = false
                gc1.visible = false
                phone1.visible = false
                w5 = 1
                clicked = 1
              }
              if(clicked == 1) {
                gameState = 5
                milk1.destroy()
              gc1.destroy()
              phone1.destroy()
                clicked = 0
              }
              }  

              else if(gameState == 5) {
                for(var i = 0; i < 10; i++) { 
                  if(r5 == 1) {
                  textSize(25)
                  text("You have selected milk!",  100, 50)
                }
                }
                for(var i = 0; i < 10; i++) { 
                  if(w5 == 1) {
                  textSize(25)
                  text("You have selected the wrong item",  100, 50)
                wc = 1
                }
                }
                sugar1.visible = true
                pillow1.visible = true
                pin1.visible = true
                console.log(clicked)
                
                  if(mousePressedOver(sugar1)) {
                    pillow1.visible = false
                    pin1.visible = false
                    r6 = 1
                    clicked = 1
                  }
                  if(mousePressedOver(pillow1) || mousePressedOver(pin1)) {
                    sugar1.visible = false
                    pillow1.visible = false
                    pin1.visible = false
                    w6 = 1
                    clicked = 1
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
                    for(var i = 0; i < 10; i++) { 
                      if(r6 == 1) {
                      textSize(25)
                      text("You have selected sugar!",  100, 50)
                    }
                    gameState = 7  
                  }
                  for(var i = 0; i < 10; i++) { 
                    if(w6 == 1) {
                    textSize(25)
                    text("You have selected the wrong item",  100, 50)
                  wc = 1
                  }
                  r7=1
                  }
                }
                    if(r1 == 1 && r2 == 1 && r3 == 1 && r4 == 1 && r5 == 1 && r6 == 1 && gameState == 7) {
                      goodBP2.visible = true
                      butter2.visible = true 
                      eggs2.visible = true 
                      flour2.visible = true
                      milk2.visible = true
                      sugar2.visible = true
                      cake1.visible = true
                    textSize(15)
                    text("Congratulations!", 800, 200)
                    text("You have made a cake!", 800, 250)
                    }
                  else if(wc == 1) {
                    wcake1.visible = true
                    textSize(15)
                    text("You have not made a cake :(", 800, 200)
                  }
                  
drawSprites()

}
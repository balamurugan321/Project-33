const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;
var skippingboy,skipb;
var snow=[];
var rand;
var boy,boyimg
var snowman,snowmanimg
var child,childimg

function preload(){
bg=loadImage("snow2.jpg");
boyimg=loadAnimation("1.png","2.png","3.png","4.png","5.png");
snowmanimg=loadImage("snowman.png");
childimg=loadImage("child.png");
}

function setup(){
    createCanvas(1250,620);
    engine=Engine.create();
    world=engine.world;
    boy = createSprite(1100,515,0,0);
    boy.addAnimation("stand",boyimg);
    boy.scale = 0.4
    snowman = createSprite(770,515,0,0);
    snowman.addImage(snowmanimg);
    snowman.scale = 0.3
    child = createSprite(450,505,0,0);
    child.addImage(childimg);
    child.scale = 0.5

}

function draw(){
Engine.update(engine);
background(bg); 
//rand = Math.round(random(1,4));
if(frameCount%5===0) {
    snow.push(new Snow(random(0, width), -50, 20))
    
  }
  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }

drawSprites();
}   


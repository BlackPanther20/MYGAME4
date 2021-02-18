var playerPaddle;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;



function setup() { 
  createCanvas(400, 400);
  playerPaddle=createSprite(100,100,100,25);
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    //console.log(ground);

    
}

function draw() {
 background(220);
playerPaddle.shapeColor=("green");
playerPaddle.y=mouseY;
playerPaddle.x=mouseX;
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);
  bounceOff(ball,playerPaddle);
  drawSprites();
}
function bounceOff(object1,object2){
        if (object1.position.x - object2.x < object2.width/2 + 10
          && object2.x - 10 < object2.width/2 + 10) {
          object1.velocityX = object1.velocityX * (-1);
          object2.velocityX = object2.velocityX * (-1);
        }
        if (object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object2.y < object2.height/2 + object1.height/2) {
            object1.velocityY = object1.velocityY * (-1);
            object2.velocityY = object2.velocityY * (-1);
        } 
      }

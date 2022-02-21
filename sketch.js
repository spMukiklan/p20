const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();

  ground =new Ground(400,390,400,20);

  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

var ball_options={
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2 }

  ball=Bodies.circle(450,450,20,ball_options)
  World.add(world,ball);


}

function draw() 
{
  background(51);
  Engine.update(engine);
  groundObj.display();
}


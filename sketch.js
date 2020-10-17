const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles =[];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score =0;
var PLAY;
var gameState;
var particle2;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
 // plinko2 = new Particle(100,100,10);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text(500,20,500);
 text(500,100,500);
 text(500,180,500);
 text(500,260,500);
 text(100,340,500);
 text(100,420,500);
 text(100,500,500);
 text(200,580,500);
 text(200,660,500);
 text(200,740,500);
  Engine.update(engine);

  ground.display();
  //plinko2.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    particles.push(new Particle(mouseX,mouseY, 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  /*if(plinkos.y===5000){
    gameState = PLAY;
  }*/
  /*if(gameState===PLAY){
    score = score+1;
  }*/

  function mousePressed(){
    if(gameState===PLAY){
      turn++;
      particles = new Particle(mouseX,mouseY,10,10);
     
    }
  }
 /* if(particle!==null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particles = null;
        if(turn>=5) gameState = "end";
      }
    }
}*/
//if(gameState===end){
  //text("Game Over",400,400)
//}
   drawSprites();
}

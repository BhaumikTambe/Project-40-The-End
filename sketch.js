var hbird,hbird1,cbird1;
var ground,ground1;
var back,back1;
var b1,b2,b3,b4,gOver1,restart1,gOver,restart;
var obGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;

function preload(){
  // Birds Image
  hbird1 = loadImage("H Bird (1).png");
  cbird1 = loadImage("C bird (1).png");
  //background
  back1 = loadImage("Background.png");
  //game Over
  gOver1 = loadImage("gameOver.png");
  restart1 = loadImage("restart.png");
}

function setup() {
 createCanvas(1365,650);
  
  
  //Happy Bird
  hbird = createSprite(300,60,20,20);
  hbird.addAnimation("H",hbird1);
  hbird.scale = 0.15;
   
  b1 = createSprite(500,0,1000,1);
  b2 = createSprite(500,650,10000,1);
  b3 = createSprite(1365,682,10000,1);
  b4 = createSprite(0,682,10000,1);

  
  //gameover
  gOver = createSprite(700,300,10,10);
  gOver.addImage("g",gOver1);
  restart = createSprite(700,350,10,10);
  restart.addImage("g",restart1);
  
  score = 0;
  
  //making groups
  obsGroup = new Group();
}

function draw() {
 background(back1);

 hbird.x = camera.position.x;
  
  if(gameState == PLAY) {
    restart.visible = false;
    gOver.visible = false;

  var jump = createButton("JUMP");
  jump.position(650,100);
  if(jump.mousePressed(function(){
    hbird.velocityY = -8;
  }));

  //adding gravity
  hbird.velocityY = hbird.velocityY + 0.6
    //score
  score = score + Math.round(getFrameRate()/60);
    
    //spawing obs
    var r = Math.round(random(1,3));
    
    if(World.frameCount % 20 === 0) {
      if(r == 1){
        obs1();
        obs2();
      }else if(r == 2){
        obs3();
        obs4();
      }else if(r == 3){
        obs5();
        obs6();
      }
    } 
  }
  
  //end state
  if(hbird.isTouching(obsGroup)||hbird.isTouching(b1)||hbird.isTouching(b2)||hbird.isTouching(b3)||hbird.isTouching(b4)) {
    gameState = END;
 }
  else if(gameState === END){
    gOver.visible = true;
    restart.visible = true;
    hbird.scale =0.3;
    hbird.velocityY=0;
    obsGroup.setVelocityXEach(0);
    
   hbird.setLifetime =-1
   obsGroup.setLifetimeEach(-1);
  }
     if(mousePressedOver(restart)) {
      reset();
    }

  drawSprites();

  if(hbird.isTouching(obsGroup)||hbird.isTouching(b1)||hbird.isTouching(b2)||hbird.isTouching(b3)||hbird.isTouching(b4)){
    textSize(24);
    fill("red");
    text("NO ONE IN THE WORLD CAN FINISH THIS GAME",420,200);
  }
  
  textSize(24);
  fill("yellow");
  text("SCORE : "+ score,50,50);
  fill("blue");
  text("Press JUMP button to fly the bird",960,50);
}

function reset(){
  gameState = PLAY;

  hbird.scale = 0.15;
  obsGroup.destroyEach();
  
  score = 0;
  
}

function obs1() {
  if(frameCount % 30 === 0) {
    var o1 = createSprite(1500,50,30,400);
    o1.shapeColor = "black";
    o1.velocityX = -(5 + 3*score/100);
    o1.lifetime = 2000;
    obsGroup.add(o1);
  }
}

function obs2() {
  if(frameCount % 30 === 0) {
    var o2 = createSprite(1500,600,30,230);
    o2.shapeColor = "black";
    o2.velocityX = -(5 + 3*score/100);
    o2.lifetime = 2000;
    obsGroup.add(o2);
  }
}

function obs3() {
  if(frameCount % 50 === 0) {
    var o3= createSprite(1500,40,30,120);
    o3.shapeColor = "black";
    o3.velocityX = -(5 + 3*score/100);
    o3.lifetime = 2000;
    obsGroup.add(o3);
  }
}

function obs4() {
  if(frameCount % 50 === 0) {
    var o4= createSprite(1500,600,30,510);
    o4.shapeColor = "black";
    o4.velocityX = -(5 + 3*score/100);
    o4.lifetime = 2000;
    obsGroup.add(o4);
  }
}

function obs5() {
  if(frameCount % 50 === 0) {
    var o5= createSprite(1500,600,30,100);
    o5.shapeColor = "black";
    o5.velocityX = -(5 + 3*score/100);
    o5.lifetime = 2000;
    obsGroup.add(o5);
  }
}

function obs6() {
  if(frameCount % 50 === 0) {
    var o6 = createSprite(1500,50,30,580);
    o6.shapeColor = "black";
    o6.velocityX = -(5 + 3*score/100);
    o6.lifetime = 2000;
    obsGroup.add(o6);
  }
}
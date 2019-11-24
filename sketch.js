var bird, birdimage, bg, bgimg, ig, igimg, bg1img, pb, Tog, Bog, textsprite, textimg;
var START = 0;
var PREPLAY = 1;
var PLAY = 2;
var END = 3;
var gamestate = START;

function preload() {
  birdimage = loadImage("flappy.png");
  bgimg = loadImage("backy.jpg");
  igimg = loadImage("ground.png");
  bg1img = loadImage("sbg.png");
  textimg = loadImage("text.png");
}

function setup() {
 createCanvas(620,375);
  
 bird = createSprite(25,height/2,16,16);
 bird.scale = 0.125;
 bird.addImage(birdimage);
 bird.setCollider("rectangle",0,0,300,200);
  
 bg = createSprite(width/2,height/2,650,500);
 bg.addImage("start",bg1img);
 bg.addImage("play",bgimg);
 bg.scale = 0.45;
  
 bg.depth = bird.depth;
 bird.depth = bird.depth+1;
 ig = createSprite(width/2,395,675,35);
 ig.addImage(igimg);
  
 pb = createSprite(285,340,175,70);
 pb.visible = false;
 pb.scale = 0.5
  
 textsprite = createSprite(width/2, height/2);
 textsprite.addImage("text",textimg);
 textsprite.scale = 0.7;
  
 Tog = new Group();
 Bog = new Group(); 
}

function draw() {
 background(255); 
  
   if(gamestate === START){
   ig.visible = false;
   bg.scale = 1;
   bird.visible = false;
    if(mousePressedOver(pb)) {
      gamestate = PREPLAY;
    }
   textsprite.visible = false;
  }
  else if(gamestate === PREPLAY) {
   
   text("PRESS SPACE TO FLAP",width/2,height/2);
   if(keyDown("space")){
    gamestate = PLAY; 
  }
  bg.changeAnimation("play",bgimg);
  textsprite.visible = false;
  bg.scale = 0.45;
  bird.visible = true;
  textsprite.visible = true;
  }
  
  else if(gamestate === PLAY) {
  textsprite.visible = false;
  bg.changeAnimation("play",bgimg);
  bg.scale = 0.45;
  bird.visible = true;
  spawnpipes();
  bg.velocityX = -6;
  bird.depth = bg.depth;
  bird.depth = bird.depth+1;
  bird.depth = bg.depth;
  bird.depth = bird.depth+1;
  bird.velocityY= bird.velocityY+1;
  ig.visible = true;
  
  if(bg.x < 150){
   bg.x = width/2;
  }
    
  if(keyDown("space")) {
   bird.velocityY = -2.5;
  }
    if(Tog.isTouching(bird)||bird.collide(ig)||Bog.isTouching(bird)) {
   gamestate = END;
   }  
  } 
   
  
  else if(gamestate === END) {
    bg.velocityX = 0;
    bg.visible = false;
    bird.velocityY = 10;
    ig.velocityY = 10;
    Tog.destroyEach();
    Bog.destroyEach();
}
   drawSprites(); 
}
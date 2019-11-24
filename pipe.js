function spawnpipes() {
 if(frameCount %60 === 0){
  var tp = createSprite(675,0,80,Math.round(random(200,450)));
  tp.velocityX = -6;
  tp.shapeColor = "green";
  tp.lifetime = 200;
  Tog.add(tp);
   
  var bp = createSprite(tp.x,375,80, 675-tp.height-25);
  bp.velocityX = tp.velocityX;
  bp.shapeColor = "green";
  bp.lifetime = 220;
  bp.depth = ig.depth;
  ig.depth = ig.depth +1;
  Bog.add(bp);
 
 }
}
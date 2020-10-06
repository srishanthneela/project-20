var car,car2,car3, wall,wall2,wall3;
var speed,speed2,speed3, weight,weight2,weight3;
var border;

function setup() {
  createCanvas(1600,750);

speed=random(22,25)
weight=random(400,1500)

speed2=random(22,25)
weight2=random(400,1500)

speed3=random(22,25)
weight3=random(400,1500)

 car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

car2=createSprite(50, 400, 50, 50);
car2.velocityX = speed2;

car3=createSprite(50, 600, 50, 50);
car3.velocityX = speed3;

wall=createSprite(1500,200,60,300);
wall.shapeColor=(80,80,80);

wall2=createSprite(1500,400,60,300);
wall2.shapeColor=(80,80,80);

wall3=createSprite(1500,600,60,300);
wall3.shapeColor=(80,80,80);

border=createSprite(1000,100,1800,5);
border.shapeColor="white";

border=createSprite(1000,300,1800,5);
border.shapeColor="white";

border=createSprite(1000,500,1800,5);
border.shapeColor="white";

border=createSprite(1000,700,1800,5);
border.shapeColor="white";





}

function draw() {
  background("black");  

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(230,230,0);
  }

  
  if(deformation<180 && deformation>100) {
  car.shapeColor=color(230,230,0); 
}
  
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  }

  ////////////////////////////////////////////////////////////

  if(wall2.x-car2.x < (car2.width+wall2.width)/2)
{
  car2.velocityX=0;
  var deformation1=0.5 * weight2 * speed2* speed2/22509;
  if(deformation>180)
  {
    car2.shapeColor=color(230,230,0);
  }

  
  if(deformation1<180 && deformation1>100) {
  car2.shapeColor=color(230,230,0); 
}
  
  if(deformation1<100)
  {
    car2.shapeColor=color(0,255,0);
  }
  }

  ////////////////////////////////////////////////////////////

  if(wall3.x-car.x < (car3.width+wall3.width)/2)
{
  car3.velocityX=0;
  var deformation3=0.5 * weight3 * speed3* speed3/22509;
  if(deformation3>180)
  {
    car3.shapeColor=color(230,230,0);
  }

  
  if(deformation3<180 && deformation3>100) {
  car3.shapeColor=color(230,230,0); 
}
  
  if(deformation3<100)
  {
    car3.shapeColor=color(0,255,0);
  }
  }
  drawSprites();
}

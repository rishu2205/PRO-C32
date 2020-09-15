
var ground,stand1,stand2,stand3,wall;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var score =0;
var rope1;

var box11;
var box21,box22,box23;
var box31,box32,box33,box34,box35;

var box211;
var box221,box222,box223;
var box231,box232,box233,box34,box235;

var box311;
var box321,box322,box323;
var box331,box332,box333,box334,box335;
var score=0 ;

var backgroundImg;
var bg = "bg1.png";


function preload() {
    getBackgroundImg();
}

function setup() {

	createCanvas(1800, 800);
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(150,400);

	rope1= new Launcher(ball.body,{x:150,y:300})
//////////////////////////////////////////
	ground = new Ground(800,800,2000,100,'black');
	wall=new Ground(1840,800,100,1800,'black');
///////////////////////////////////////
	stand1=new Ground(810,500,400,30,'blue');
	stand2=new Ground(1500,300,400,30,'blue');
	stand3=new Ground(1200,700,400,30,'blue');
/////////////////////////////////////	
    
	box31=new Box(750,490,'red');
	box32=new Box(780,490,'red');
	box33=new Box(810,490,'red');
	box34=new Box(840,490,'red');
	box35=new Box(870,490,'red');

	box21=new Box(780,440,'orange');
	box22=new Box(810,440,'orange');
	box23=new Box(840,440,'orange');

	box11=new Box(810,390,'yellow');
////////////////////////////////////////	
	box231=new Box(1440,290,'red');
	box232=new Box(1470,290,'red');
	box233=new Box(1500,290,'red');
	box234=new Box(1530,290,'red');
	box235=new Box(1560,290,'red');

	box221=new Box(1470,240,'orange');
	box222=new Box(1500,240,'orange');
	box223=new Box(1530,240,'orange');

    box211=new Box(1500,190,'yellow');
////////////////////////////////////////	
	box331=new Box(1140,690,'red');
	box332=new Box(1170,690,'red');
	box333=new Box(1200,690,'red');
	box334=new Box(1230,690,'red');
	box335=new Box(1260,690,'red');

	box321=new Box(1170,640,'orange');
	box322=new Box(1200,640,'orange');
	box323=new Box(1230,640,'orange');

    box311=new Box(1200,590,'yellow');
///////////////////////////////////////	
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  //text("SCORE : "+score,700,40);
  //background('lightblue');
  if(backgroundImg)
  background(backgroundImg);
  //noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  //text("SCORE : "+score,700,40);
  noFill();
  Engine.update(engine);
	ground.display();
	wall.display();

	ball.display();
	rope1.display();

	stand1.display();
	stand2.display();
	stand3.display();
//////////////////////
	box31.display();
	box32.display();
	box33.display();
	box34.display();
	box35.display();

	box21.display();
	box22.display();
	box23.display();
	
	box11.display();
/////////////////////////

	box231.display();
	box232.display();
	box233.display();
	box234.display();
	box235.display();

	box221.display();
	box222.display();
	box223.display();
	
	box211.display();

///////////////////////


	box331.display();
	box332.display();
	box333.display();
	box334.display();
	box335.display();

	box321.display();
	box322.display();
	box323.display();
	
	box311.display();

	box31.score();
	box32.score();
	box33.score();
	box34.score();
	box35.score();

	box21.score();
	box22.score();
	box23.score();
	
	box11.score();
/////////////////////////

	box231.score();
	box232.score();
	box233.score();
	box234.score();
	box235.score();

	box221.score();
	box222.score();
	box223.score();
	
	box211.score();

///////////////////////


	box331.score();
	box332.score();
	box333.score();
	box334.score();
	box335.score();

	box321.score();
	box322.score();
	box323.score();
	
	box311.score();
	//text("0",800,400);
	//console.log(score);
	//text("SCORE : "+score,700,40);
////////////////////////
  drawSprites();
 
}
function keyPressed()
{
    if(keyCode===32)
    {  //Matter.body.setPosition(ball.body, {x: 200, y: 500});
        rope1.attach(ball.body);
    }
}





function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.cut();
}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
var img;
var imgCover;
var logo;



function preload(){
	img = loadImage("img/door.jpg");
	imgCover = loadImage("img/door_cover.png");
	logo = loadImage("img/navi/1.png");
}

function setup(){
	var can = createCanvas(310,550);
	can.id("img");
}

function draw(){
	background(img,255);
	translate(mouseX/150,mouseY/180);
	image(imgCover,0,0,310,550);
	image(logo,0,0,200,100);
	console.log(mouseX,mouseY);
}

function mousePressed(){
	if(mouseX>=0&&mouseX<=340&&mouseY>=0&&mouseY<=580){
	window.location.href="instr.html";		
	}
}
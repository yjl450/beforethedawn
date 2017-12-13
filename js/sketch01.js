var s;
var bgImg;

function preload(){
	bgImg = loadImage('img/1.png');
}
div.id("bgImg")

function setup(){
	can=createCanvas(600,600);

	//s=color(250,0,0);
	background(bgImg);
	//image(bgImg, 0, 0, width, height);

}
function mouseDragged(){
	stroke(s);
	strokeWeight(3);
	line(mouseX,mouseY,pmouseX,pmouseY);

}
function draw(){

	s=color(random(255),random(255),random(255));
}

function keyPressed(){
	if(key ===" "){
		background(random(255),random(255),random(255));
	}
}


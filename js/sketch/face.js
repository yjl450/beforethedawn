//tracking.js
var imgsrc = "img/emoji/1.png";
var img = new Image();

window.onload = function() {
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');


      var tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      tracking.track('#video', tracker, { camera: true });

      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
          context.drawImage(img,rect.x-50, rect.y-50, rect.width+100, rect.height+100);        });
      });
    };



//p5.js
function setup(){
	var canvas = createCanvas(720,540);
	canvas.id("canvas");
}

//JavaScript
function faceSelect1(){
  img.src = "img/emoji/1.png";
  console.log(img.src);
}

function faceSelect2(){
  img.src = "img/emoji/2.png";
  console.log(img.src);
}

function faceSelect3(){
  img.src = "img/emoji/3.png";
  console.log(img.src);
}

function faceSelect4(){
  img.src = "img/emoji/4.png";
  console.log(img.src);
}

function faceSelect5(){
  img.src = "img/emoji/5.png";
  console.log(img.src);
}

function faceSelect6(){
  img.src = "img/emoji/6.gif";
  console.log(img.src);
}

function faceSelect7(){
  img.src = "img/emoji/7.png";
  console.log(img.src);
}
function faceSelect8(){
  img.src = "img/emoji/8.png";
  console.log(img.src);
}
function faceSelect9(){
  img.src = "img/emoji/9.png";
  console.log(img.src);
}
function faceSelect10(){
  img.src = "img/emoji/10.png";
  console.log(img.src);
}
function faceSelect11(){
  img.src = "img/emoji/11.png";
  console.log(img.src);
}
function faceSelect12(){
  img.src = "img/emoji/12.png";
  console.log(img.src);
}
function faceSelect13(){
  img.src = "img/emoji/13.png";
  console.log(img.src);
}
function faceSelect14(){
  img.src = "img/emoji/14.png";
  console.log(img.src);
}
var mic, recorder, soundFile;

var state = 0; 
function setup() {
  var can=createCanvas(300,50);
  can.id("can");
  background(200);
  fill(100);
  text('record', 90,25);

 
  mic = new p5.AudioIn();

  
  mic.start();


  recorder = new p5.SoundRecorder();

  recorder.setInput(mic);

  soundFile = new p5.SoundFile();
  }

function mousePressed() {
  
  if(mouseX>=0&&mouseX<=300&&mouseY>=0&&mouseY<=50){
    
  
  if (state === 0 && mic.enabled) {

    recorder.record(soundFile);

    background(255,0,0);
    text('stop', 90, 25);
    state++;
  }

  else if (state === 1) {
    recorder.stop(); 

    background(0,255,0);
    text('save', 90, 25);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); 
    saveSound(soundFile, 'mySound.wav'); 
    state++;
  }
}
}
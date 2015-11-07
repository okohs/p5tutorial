var mic, fft;

function setup() {
   createCanvas(710,400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(200);
   var spectrum = fft.analyze();

   beginShape();
  for (i = 0; i<spectrum.length; i++) {
    var rx = random(spectrum.length);
    var ry = random(spectrum.length);
    ellipse(rx, ry, spectrum[i], spectrum[i]);
  }
   endShape();
}

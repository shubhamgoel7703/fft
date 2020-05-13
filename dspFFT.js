var lib = require('dsp.js');

var fft = new lib.FFT(4, 44100);

// var osc = new lib.Oscillator(lib.SINEWAVE, 440, 1, 4, 22050);
// osc.generate();
// var signal = osc.signal;


var waveform1 = [1, 0, 1, 0];

fft.forward(waveform1);//signal
var spectrum = fft.spectrum;

console.log(waveform1);
console.log(spectrum);


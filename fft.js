var ft = require('fourier-transform');
// var db = require('decibels');

// var frequency = 440;
// var size = 1024;
// var sampleRate = 44100;
// var waveform = new Float32Array(size);
// for (var i = 0; i < size; i++) {
//     waveform[i] = Math.sin(frequency * Math.PI * 2 * (i / sampleRate));
// }
var waveform1 = [1, 0, 1, 0];

//get normalized magnitudes for frequencies from 0 to 22050 with interval 44100/1024 ≈ 43Hz
var spectrum = ft(waveform1);

//convert to decibels
// var decibels = spectrum.map((value) => db.fromGain(value))

console.log(waveform1)
console.log(spectrum)
console.log(ft)
// console.log(decibels)

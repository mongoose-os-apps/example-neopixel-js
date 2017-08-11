load('api_timer.js');
load('api_neopixel.js');

let pin = 5, numPixels = 12, colorOrder = NeoPixel.GRB, i = 0;
let strip = NeoPixel.create(pin, numPixels, colorOrder);

Timer.set(150, true, function() {
  let pixel = i++ % numPixels;
  let r = i % 255, g = i * 2 % 255, b = i * i % 255;
  strip.clear();
  strip.setPixel(pixel, r, g, b);
  strip.show();
}, null);

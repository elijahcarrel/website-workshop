var MagicNumber = require("../shared/MagicNumber.js");

console.log("index!");
var guess = 30;
console.log("guessed " + guess + (MagicNumber.guess(guess) ? "...right!" : "...wrong!"));
console.log("the magic number was: " + MagicNumber.reveal());

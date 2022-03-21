const fs = require("fs");

const contents = fs.readFileSync("test3.txt");

var str = contents.toString();

var lines = str.split("\n").length;

console.log(lines - 1);

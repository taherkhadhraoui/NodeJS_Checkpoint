const fs = require("fs");

const file = "test3.txt";

fs.readFile(file, (err, contents) => {
  var lines = contents.toString().split("\n").length - 1;

  console.log(lines);
});

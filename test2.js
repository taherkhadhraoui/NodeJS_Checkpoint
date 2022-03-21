var fs = require("fs");

fs.writeFile("test2.txt", "welcom on test2", (err) => {
  if (err) {
    throw err;
  }
  console.log("file created");
});

console.log("program ended");

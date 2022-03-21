const net = require("net");

const server = net.createServer();

var sockets = [];

server.on("connection", (socket) => {
  console.log("got a new connection");
  sockets.push(socket);
});
server.on("error", (err) => {
  console.log("Server error:", err.message);
});
server.on("close", () => {
  console.log("Server closed");
});
server.listen(8081);

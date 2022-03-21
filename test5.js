// Requires
const net = require("net");

// Create socket
const port = 3333;
const host = "localhost";
const timeout = 320;
let retrying = false;

// Functions to handle socket events
function makeConnection() {
  socket.connect(port, host);
}
function connectEventHandler() {
  console.log("connected");
  retrying = false;
}
function dataEventHandler() {
  console.log("data");
}
function endEventHandler() {
  console.log("end");
}
function timeoutEventHandler() {
  console.log("timeout");
}
function drainEventHandler() {
  console.log("drain");
}
function errorEventHandler() {
  // console.log('error');
}
function closeEventHandler() {
  if (!retrying) {
    retrying = true;
    console.log("Reconnecting...");
  }
  setTimeout(makeConnection, timeout);
}

let socket = new net.Socket();
socket.on("connect", connectEventHandler);
socket.on("data", dataEventHandler);
socket.on("end", endEventHandler);
socket.on("timeout", timeoutEventHandler);
socket.on("drain", drainEventHandler);
socket.on("error", errorEventHandler);
socket.on("close", closeEventHandler);

// Connect
console.log("Connecting to " + host + ":" + port + "...");
makeConnection();

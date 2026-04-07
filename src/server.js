const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 9090 });

wss.on("connection", (ws) => {
  console.log("New chatter in the house!");
  ws.send("Welcome to the chaos—say hi!");

  ws.on("message", (msg) => {
    console.log(`Got a message: ${msg}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  ws.on("close", () => {
    console.log("Someone bailed—rude.");
  });
});

console.log("Server's up on port 8080—let's chat!");
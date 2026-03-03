// index.js
const { setupWSConnection } = require("y-websocket/bin/utils");
const http = require("http");
const WebSocket = require("ws");

const port = process.env.PORT || 1234;
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("NexCode WebRTC Signaling Server is running.\\n");
});

// Bind the WebSocket server to the HTTP server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections using standard YJS utilities
wss.on("connection", setupWSConnection);

server.listen(port, () => {
  console.log(`Signaling server running on port: ${port}`);
});

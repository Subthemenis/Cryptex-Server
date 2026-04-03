import { createServer } from "http";
import { WebSocketServer } from "ws";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("wisp server");
});

const wss = new WebSocketServer({ server });

console.log(`Wisp server listening on port ${PORT}`);

wss.on("connection", (ws, req) => {
  console.log("Client connected");
  ws.on("message", (data) => {
    console.log("Received:", data);
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT);

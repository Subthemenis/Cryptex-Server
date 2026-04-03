import { wisp } from "@mercuryworkshop/wisp-js/server";
import { WebSocketServer } from "ws";

const PORT = process.env.PORT || 3000;

const server = Bun ? Bun.serve({ port: PORT, fetch: () => new Response("wisp server") }) : null;

const wss = new WebSocketServer({
  port: server ? undefined : PORT,
  server: server ? undefined : undefined,
});

console.log(`Wisp server listening on port ${PORT}`);

wss.on("connection", (ws, req) => {
  wisp.routeRequest(ws, req);
});

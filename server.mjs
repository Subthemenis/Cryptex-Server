import { server } from "@mercuryworkshop/wisp-js/server";
import { createServer } from "http";

const server = createServer();

// The wisp server handles all WebSocket upgrade requests
server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Wisp server running on port ${PORT}`);
});

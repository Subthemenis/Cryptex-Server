import { wisp } from '@mercuryworkshop/wisp-js';
import { createServer } from 'http';

const server = createServer(wisp);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Wisp server running on port ${PORT}`);
});

import { createServer } from 'node:net';
import { SERVER_HOST, SERVER_PORT } from './consts';
import { log } from './utils/logger';
import { handleConnection } from './connection/handleConnection';
import { Client, Order } from './models';

const initialClients: Client[] = [];
const initialOrders: Order[] = [];

createServer(handleConnection(initialClients, initialOrders)).listen(
  SERVER_PORT,
  SERVER_HOST,
  () => log(`listening on port ${SERVER_PORT}`),
);

process.on('uncaughtException', (err) => {
  if (err.message.includes('ECONNRESET')) return;
  console.error(err);
});

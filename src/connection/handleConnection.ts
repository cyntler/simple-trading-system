import { Socket } from 'node:net';
import { Client, Order } from '../models';
import { handleClientInput } from '../input/handleClientInput';
import { handleDisconnection } from './handleDisconnection';
import { generateId } from '../utils/generateId';
import { getRandomColor } from './getRandomColor';
import { log } from '../utils/logger';

export const handleConnection =
  (clients: Client[], orders: Order[]) =>
  (socket: Socket): Client => {
    const client: Client = {
      id: generateId(clients.map((client) => client.id)),
      color: getRandomColor(),
      socket,
    };

    clients.push(client);

    log(`connected`, {
      color: client.color,
      additionalData: [client.socket.remoteAddress, client.id],
    });

    socket.on('data', handleClientInput(orders, clients, client));
    socket.on('close', handleDisconnection(clients, client));

    return client;
  };

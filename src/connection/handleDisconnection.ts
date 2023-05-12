import { Client } from '../models';
import { log } from '../utils/logger';

export const handleDisconnection =
  (clients: Client[], { id, color, socket }: Client) =>
  () => {
    socket.destroy();

    clients.splice(
      clients.findIndex((client) => client.socket === socket),
      1,
    );

    log(`disconnected`, {
      color,
      additionalData: [socket.remoteAddress, id],
    });
  };

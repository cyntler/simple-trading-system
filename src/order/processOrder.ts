import { AvailableGood, Client, Order, PossibleInputCommand } from '../models';
import { generateId } from '../utils/generateId';
import { log } from '../utils/logger';
import { deleteCompletedOrders } from './deleteCompletedOrders';
import { getOrdersMatchedPair } from './getOrdersMatchedPair';
import { writeToClient } from './writeToClient';

export const processOrder = (
  orders: Order[],
  clients: Client[],
  currentClient: Client,
  command: PossibleInputCommand,
  good: AvailableGood,
) => {
  const newOrder = {
    id: generateId(orders.map((order) => order.id)),
    client: currentClient,
    type: command,
    good,
  };

  orders.push(newOrder);

  log(`new ${command.toLocaleLowerCase()} order`, {
    color: currentClient.color,
    additionalData: [currentClient.id, good],
  });

  writeToClient(currentClient, 'ACK', good);

  const ordersMatchedPair = getOrdersMatchedPair(orders, newOrder);

  if (ordersMatchedPair) {
    deleteCompletedOrders(orders, ordersMatchedPair);

    log('trade', {
      color: 'red',
      additionalData: [good],
    });

    for (const client of clients) {
      writeToClient(client, 'TRADE', good, 'red');
    }
  }
};

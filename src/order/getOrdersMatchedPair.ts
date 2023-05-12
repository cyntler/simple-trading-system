import { Order } from '../models';

export const getOrdersMatchedPair = (
  orders: Order[],
  newOrder: Order,
): Order[] | undefined => {
  const matchedOrder = orders.find(
    (order) =>
      order.client !== newOrder.client &&
      order.good === newOrder.good &&
      order.type !== newOrder.type,
  );

  if (matchedOrder) {
    return [newOrder, matchedOrder];
  }

  return undefined;
};

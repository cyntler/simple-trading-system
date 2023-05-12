import { Order } from '../models';

export const deleteCompletedOrders = (
  orders: Order[],
  completedOrders: Order[],
) => {
  const completedOrdersIndexes = completedOrders.map((order) =>
    orders.findIndex((o) => o === order),
  );

  for (const index of completedOrdersIndexes) {
    orders.splice(index, 1);
  }

  return orders;
};

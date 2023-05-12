import { Order } from '../../models';
import { createClientMock } from '../../utils-tests/createClientMock';
import { deleteCompletedOrders } from '../deleteCompletedOrders';

test('delete orders from array', () => {
  const orders: Order[] = [
    {
      id: 1,
      client: createClientMock(),
      good: 'APPLE',
      type: 'BUY',
    },
    {
      id: 2,
      client: createClientMock(),
      good: 'APPLE',
      type: 'SELL',
    },
  ];

  expect(orders).toHaveLength(2);

  deleteCompletedOrders(orders, [orders[0]]);

  expect(orders).toHaveLength(1);
});

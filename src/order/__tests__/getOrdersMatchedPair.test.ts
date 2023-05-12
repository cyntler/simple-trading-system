import { Order } from '../../models';
import { createClientMock } from '../../utils-tests/createClientMock';
import { getOrdersMatchedPair } from '../getOrdersMatchedPair';

test('orders were matched', () => {
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

  const newOrder: Order = {
    id: 3,
    client: createClientMock(),
    good: 'APPLE',
    type: 'BUY',
  };

  const matchedPair = getOrdersMatchedPair(orders, newOrder);

  expect(matchedPair).toHaveLength(2);
  expect(matchedPair[0]).toBe(newOrder);
  expect(matchedPair[1]).toBe(orders[1]);
});

test('orders have not been matched', () => {
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

  const newOrder: Order = {
    id: 3,
    client: createClientMock(),
    good: 'ONION',
    type: 'BUY',
  };

  const matchedPair = getOrdersMatchedPair(orders, newOrder);

  expect(matchedPair).toBeUndefined();
});

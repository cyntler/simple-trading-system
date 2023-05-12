import chalk from 'chalk';
import { Order } from '../../models';
import { createClientMock } from '../../utils-tests/createClientMock';
import { processOrder } from '../processOrder';

let logSpy: jest.SpyInstance;

beforeAll(() => {
  logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockReset();
});

test('order processing with trade action', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];
  const orders: Order[] = [
    {
      id: 1,
      client: createClientMock(),
      good: 'APPLE',
      type: 'SELL',
    },
  ];
  const currentClient = createClientMock();

  processOrder(orders, [currentClient], currentClient, 'BUY', 'APPLE');

  expect(orders).toHaveLength(0);
  expect(logSpy).toHaveBeenCalledTimes(2);
  expect(logSpy).toHaveBeenNthCalledWith(
    1,
    chalk[currentClient.color](
      `${currentTime} new buy order (${currentClient.id}, APPLE)`,
    ),
  );
  expect(logSpy).toHaveBeenNthCalledWith(
    2,
    chalk.red(`${currentTime} trade (APPLE)`),
  );
});

test('order processing without trade action', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];
  const orders: Order[] = [];
  const currentClient = createClientMock();

  processOrder(orders, [currentClient], currentClient, 'BUY', 'APPLE');

  expect(orders).toHaveLength(1);
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(
    chalk[currentClient.color](
      `${currentTime} new buy order (${currentClient.id}, APPLE)`,
    ),
  );
});

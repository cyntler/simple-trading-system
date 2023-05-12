import chalk from 'chalk';
import { Client } from '../../models';
import { createClientMock } from '../../utils-tests/createClientMock';
import { handleConnection } from '../handleConnection';

let logSpy: jest.SpyInstance;

beforeAll(() => {
  logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockReset();
});

test('client connection', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];
  const clients: Client[] = [];

  const newClient = handleConnection(clients, [])(createClientMock().socket);

  expect(clients).toHaveLength(1);
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(
    chalk[newClient.color](
      `${currentTime} connected (0.0.0.0, ${newClient.id})`,
    ),
  );
});

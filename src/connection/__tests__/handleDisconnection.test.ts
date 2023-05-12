import chalk from 'chalk';
import { createClientMock } from '../../utils-tests/createClientMock';
import { handleDisconnection } from '../handleDisconnection';

let logSpy: jest.SpyInstance;

beforeAll(() => {
  logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockReset();
});

test('client disconnection', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];
  const currentClient = createClientMock();
  const clients = [currentClient];

  handleDisconnection(clients, currentClient)();

  expect(clients).toHaveLength(0);
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(
    chalk[currentClient.color](
      `${currentTime} disconnected (0.0.0.0, ${currentClient.id})`,
    ),
  );
});

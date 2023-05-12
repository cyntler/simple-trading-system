import chalk from 'chalk';
import { createClientMock } from '../../utils-tests/createClientMock';
import { writeToClient } from '../writeToClient';

test('write ACK message to the client', () => {
  const client = createClientMock();
  const testingMessage = 'message';

  client.socket.on('data', (data) => {
    expect(data.toString().trim()).toBe(
      chalk[client.color](`ACK:${testingMessage}`),
    );
  });

  writeToClient(client, 'ACK', testingMessage, client.color);
});

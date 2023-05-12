import { Socket } from 'net';
import { getRandomColor } from '../connection/getRandomColor';
import { Client } from '../models';
import { generateId } from '../utils/generateId';

class MockSocket {
  remoteAddress = '0.0.0.0';
  listeners: ((data: Buffer) => void)[] = [];

  write(message: Buffer) {
    this.listeners.forEach((listener) => listener(message));
    return message;
  }

  on(_eventType: string, listener: (data: Buffer) => void) {
    this.listeners.push(listener);
  }

  destroy() {
    return true;
  }
}

export const createClientMock = (): Client => ({
  id: generateId(),
  color: getRandomColor(),
  socket: new MockSocket() as unknown as Socket,
});

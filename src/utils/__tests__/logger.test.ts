import chalk from 'chalk';
import { log } from '../logger';

let logSpy: jest.SpyInstance;

beforeAll(() => {
  logSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
  logSpy.mockReset();
});

test('log a normal message', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];

  log('hello from test');

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(`${currentTime} hello from test`);
});

test('log a message with red color', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];

  log('hello from test', {
    color: 'red',
  });

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(
    chalk.red(`${currentTime} hello from test`),
  );
});

test('log a message with additional option', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];

  log('hello from test', {
    additionalData: ['data'],
  });

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(`${currentTime} hello from test (data)`);
});

test('log a message with additional options', () => {
  const currentTime = new Date().toTimeString().split(' ')[0];

  log('hello from test', {
    additionalData: ['data1', 'data2'],
  });

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith(
    `${currentTime} hello from test (data1, data2)`,
  );
});

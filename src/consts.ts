import { Color } from './models';

export const SERVER_HOST = '127.0.0.1';
export const SERVER_PORT = 8888;

export const ID_RANDOM_RANGE = [10000, 99999];

export const AVAILABLE_GOODS = [
  'APPLE',
  'PEAR',
  'TOMATO',
  'POTATO',
  'ONION',
] as const;

export const POSSIBLE_INPUT_COMMANDS = ['BUY', 'SELL'] as const;

export const POSSIBLE_OUTPUT_TYPES = ['ACK', 'TRADE'] as const;

export const AVAILABLE_COLORS: Color[] = [
  'blue',
  'cyan',
  'gray',
  'green',
  'magenta',
  'yellow',
];

import { Socket } from 'node:net';
import chalk from 'chalk';
import {
  AVAILABLE_GOODS,
  POSSIBLE_INPUT_COMMANDS,
  POSSIBLE_OUTPUT_TYPES,
} from './consts';

export type AvailableGood = (typeof AVAILABLE_GOODS)[number];
export type PossibleInputCommand = (typeof POSSIBLE_INPUT_COMMANDS)[number];
export type PossibleOutputType = (typeof POSSIBLE_OUTPUT_TYPES)[number];
export type Color = typeof chalk.ForegroundColor;

export interface Client {
  id: number;
  color: Color;
  socket: Socket;
}

export interface Order {
  id: number;
  client: Client;
  type: PossibleInputCommand;
  good: AvailableGood;
}

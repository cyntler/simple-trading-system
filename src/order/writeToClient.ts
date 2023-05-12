import chalk from 'chalk';
import { Client, Color, PossibleOutputType } from '../models';

export const writeToClient = (
  client: Client,
  type: PossibleOutputType,
  message: string,
  color?: Color,
) =>
  client.socket.write(
    `${(color ? chalk[color] : chalk)(`${type}:${message}`)}\n`,
  );

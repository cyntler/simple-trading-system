import chalk from 'chalk';
import { Color } from '../models';

export const log = (
  message: string,
  options?: { color?: Color; additionalData?: unknown[] },
): void =>
  console.log(
    (options?.color ? chalk[options.color] : chalk)(
      new Date().toTimeString().split(' ')[0],
      `${message}${
        options?.additionalData ? ` (${options.additionalData.join(', ')})` : ''
      }`,
    ),
  );

import { AvailableGood, PossibleInputCommand } from '../models';

export const parseInput = (
  input: Buffer,
): [PossibleInputCommand, AvailableGood] => {
  const parsedInput = input
    .toLocaleString()
    .replace('\n', '')
    .split(':')
    .map((val) => val.toLocaleUpperCase());

  if (parsedInput.length === 2) {
    return parsedInput as [PossibleInputCommand, AvailableGood];
  }

  return [null, null];
};

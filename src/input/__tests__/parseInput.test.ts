import { parseInput } from '../parseInput';

test('parse valid buy lowercase input', () => {
  const parsedInput = parseInput(Buffer.from('buy:apple', 'utf-8'));

  expect(parsedInput).toHaveLength(2);
  expect(parsedInput[0]).toBe('BUY');
  expect(parsedInput[1]).toBe('APPLE');
});

test('parse valid buy uppercase input', () => {
  const parsedInput = parseInput(Buffer.from('BUY:APPLE', 'utf-8'));

  expect(parsedInput).toHaveLength(2);
  expect(parsedInput[0]).toBe('BUY');
  expect(parsedInput[1]).toBe('APPLE');
});

test('parse invalid input', () => {
  const parsedInput = parseInput(Buffer.from('invalid input', 'utf-8'));

  expect(parsedInput).toHaveLength(2);
  expect(parsedInput[0]).toBeNull();
  expect(parsedInput[1]).toBeNull();
});

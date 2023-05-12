import { createClientMock } from '../../utils-tests/createClientMock';
import { handleClientInput } from '../handleClientInput';

test('move to order processing / passing valid input', () => {
  const result = handleClientInput(
    [],
    [],
    createClientMock(),
  )(Buffer.from('BUY:APPLE', 'utf-8'));

  expect(result).toBeTruthy();
});

test('do nothing / passing invalid input', () => {
  const result = handleClientInput(
    [],
    [],
    createClientMock(),
  )(Buffer.from('BUY:APPL', 'utf-8'));

  expect(result).toBeFalsy();
});

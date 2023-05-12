import { AVAILABLE_COLORS } from '../../consts';
import { getRandomColor } from '../getRandomColor';

test('get random color', () => {
  const color = getRandomColor();

  expect(AVAILABLE_COLORS).toContain(color);
});

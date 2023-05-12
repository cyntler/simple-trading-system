import { ID_RANDOM_RANGE } from '../../consts';
import { generateId } from '../generateId';

test('generate random id', () => {
  const id = generateId();

  expect(id.toString()).toHaveLength(5);
  expect(id).toBeGreaterThanOrEqual(ID_RANDOM_RANGE[0]);
  expect(id).toBeLessThanOrEqual(ID_RANDOM_RANGE[1]);
});

test('generate random id with number array ignoring', () => {
  const desiredId = 44444;

  const id = generateId(
    Array.from(
      { length: ID_RANDOM_RANGE[1] },
      (_, i) => i + ID_RANDOM_RANGE[0],
    ).filter((num) => num !== desiredId),
  );

  expect(id).toBe(desiredId);
});

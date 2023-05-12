import { ID_RANDOM_RANGE } from '../consts';

export const generateId = (ignoreNumbers: number[] = []): number => {
  let random = 0;

  while (true) {
    random =
      Math.floor(Math.random() * ID_RANDOM_RANGE[1]) + ID_RANDOM_RANGE[0];
    if (!ignoreNumbers.includes(random)) {
      break;
    }
  }

  return random;
};

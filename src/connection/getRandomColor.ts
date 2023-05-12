import { AVAILABLE_COLORS } from '../consts';
import { Color } from '../models';

export const getRandomColor = (): Color =>
  AVAILABLE_COLORS[Math.floor(Math.random() * AVAILABLE_COLORS.length)];

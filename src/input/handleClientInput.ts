import { AVAILABLE_GOODS, POSSIBLE_INPUT_COMMANDS } from '../consts';
import { Order, Client } from '../models';
import { processOrder } from '../order/processOrder';
import { parseInput } from './parseInput';

export const handleClientInput =
  (orders: Order[], clients: Client[], currentClient: Client) =>
  (data: Buffer): boolean => {
    const [command, good] = parseInput(data);

    if (
      POSSIBLE_INPUT_COMMANDS.includes(command) &&
      AVAILABLE_GOODS.includes(good)
    ) {
      processOrder(orders, clients, currentClient, command, good);
      return true;
    }

    return false;
  };

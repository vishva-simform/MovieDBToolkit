import type { FC } from 'react';

interface ItemType {
  route: string;
  component: FC;
  icon?: number;
}

export type { ItemType };

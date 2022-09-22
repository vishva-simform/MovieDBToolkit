import { type FC } from 'react';

interface TabButtonPropType {
  item: {
    component: FC;
    icon: number;
    route: string;
  };
}
export type { TabButtonPropType };

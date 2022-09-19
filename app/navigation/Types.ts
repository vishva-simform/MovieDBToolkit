import type { FC } from 'react';
import { NavigationStrings } from '../constants';

interface ItemType {
  route: keyof TabBarParamList;
  component: FC;
  icon: number;
}
type TabBarParamList = {
  [NavigationStrings.HOME]: undefined;
  [NavigationStrings.COMMUNITY]: undefined;
  [NavigationStrings.TRAILERS]: undefined;
  [NavigationStrings.MOVIES]: undefined;
};

export type { ItemType, TabBarParamList };

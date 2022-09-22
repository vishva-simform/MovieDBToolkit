import { Icons } from '../assets';
import { Community, HomeScreen, Movies, Trailers } from '../modules';
import { NavigationStrings } from './NavigationStrings';
import type { TabScreensType } from './Types';

export const TabScreens: TabScreensType[] = [
  {
    route: NavigationStrings.HOME,
    icon: Icons.home,
    component: HomeScreen,
  },
  {
    route: NavigationStrings.TRAILERS,
    icon: Icons.trailer,
    component: Trailers,
  },
  {
    route: NavigationStrings.MOVIES,
    icon: Icons.movies,
    component: Movies,
  },
  {
    route: NavigationStrings.COMMUNITY,
    icon: Icons.community,
    component: Community,
  },
];

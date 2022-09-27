import { Icons } from '../assets';
import { Community, HomeScreen, Movies, Trailers } from '../modules';
import type { ItemType } from '../navigation';
import { NavigationStrings } from './NavigationStrings';
import type { FilterListType } from './Types';

export const TabScreens: ItemType[] = [
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

export const popularListFilter: FilterListType[] = [
  { id: 0, name: 'Streaming' },
  { id: 1, name: 'On Tv' },
  { id: 2, name: 'For Rent' },
  { id: 3, name: 'In Theaters' },
];

export const freeToWatch: FilterListType[] = [
  { id: 0, name: 'Movies' },
  { id: 1, name: 'Tv' },
];
export const Trending: FilterListType[] = [
  { id: 0, name: 'Today' },
  { id: 1, name: 'This Week' },
];

export const latestTrailer: FilterListType[] = [
  { id: 0, name: 'Streaming', identifier: 'trailerStreaming' },
  { id: 1, name: 'On Tv', identifier: 'trailerOnTv' },
  { id: 2, name: 'For Rent', identifier: 'trailerforRent' },
  { id: 3, name: 'In Theaters', identifier: 'trailerIntheater' },
];

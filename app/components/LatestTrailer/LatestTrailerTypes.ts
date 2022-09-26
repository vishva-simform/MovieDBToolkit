import type { MovieListItemType } from '../List';

interface LatestTrailerProp {
  listTitle?: string;
  filterList: Array<{
    id: number;
    name: string;
  }>;
  movieList: MovieListItemType;
}

interface ItemType {
  id: number;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  original_name: string;
}

export type { LatestTrailerProp, ItemType };

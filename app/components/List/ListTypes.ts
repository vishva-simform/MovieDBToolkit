import type { ImageStyle, StyleProp, ViewStyle } from 'react-native';

interface ResultType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: object;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  original_name: string;
}

interface MovieListItemType {
  page: number;
  results: Array<ResultType>;
  total_pages: number;
  total_results: number;
}

interface ListProp {
  listTitle?: string;
  filterList: Array<{
    id: number;
    name: string;
  }>;
  latestTrailerChevron?: StyleProp<ImageStyle>;
  dropDownButtonStyle?: StyleProp<ViewStyle>;
  movieList: MovieListItemType;
}
export type { MovieListItemType, ResultType, ListProp };

import type { ResultType } from '../../components/List';

interface InitialStateType {
  popularMovieList: Array<ResultType>;
  popularPage?: number;
}

export type { InitialStateType };

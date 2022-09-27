import type { ResultType } from '../../components';

interface InitialStateType {
  freeToWatchMovieList: Array<ResultType>;
  freeToWatchPage?: number;
  status: string;
}

export type { InitialStateType };

import type { ResultType } from '../../components/List';

interface TrendingStateType {
  trendingList: Array<ResultType>;
  trendingPage?: number;
  status: string;
}

export type { TrendingStateType };

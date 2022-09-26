import type { ResultType } from '../components/List';
import { Colors } from '../theme';

// function to get color of circular indicator according to rate and date of that movie/tv show
export const getListItemData = (data: ResultType) => {
  const votePercentage: number = data?.vote_average * 10;
  const activeStrokeColor: string =
    data?.vote_average > 6.0 ? Colors.progressBarColor : Colors.yellow;
  const inActiveStrokeColor: string =
    data?.vote_average > 6.0 ? Colors.inActiveGreen : Colors.inActiveYellow;
  const date: string = new Date(data?.release_date ?? data?.first_air_date)
    .toString()
    .slice(4, 15);
  return { votePercentage, activeStrokeColor, inActiveStrokeColor, date };
};

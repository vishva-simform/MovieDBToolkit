import { baseUrls } from './appConstant';

export const EndPoints = {
  popularMovieEndPoint: `/movie/popular?${baseUrls.apiKey}`,
  freeToWatchEndPoint: `/discover/movie?${baseUrls.apiKey}&sort_by=revenue.desc&with_watch_monetization_types=free`,
  freeToWatchTV: `/discover/tv?${baseUrls.apiKey}&with_watch_monetization_types=free`,
  trendingEndPoint: `/trending/all/day?${baseUrls.apiKey}`,
  trendingThisWeek: `/trending/all/week?${baseUrls.apiKey}`,
  latestTrailerEndPoint: `/movie/upcoming?${baseUrls.apiKey}`,
  inTheater: `/movie/now_playing?${baseUrls.apiKey}`,
  onTV: `/tv/popular?${baseUrls.apiKey}`,
  forRent: `/discover/movie?&${baseUrls.apiKey}&sort_by=revenue.desc&with_watch_monetization_types=rent`,
};

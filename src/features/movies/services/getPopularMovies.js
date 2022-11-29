import { TMDB } from "../../../config/tmdb";
import { moviesAdapter } from "../adapter/moviesAdapter";

export const getPopularMovies = async () => {
  const res = await TMDB.api.get(TMDB.path.movies.popular);
  const moviesAdapted = moviesAdapter(res.data.results);

  return moviesAdapted;
};

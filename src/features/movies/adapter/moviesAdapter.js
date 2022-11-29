import { TMDB } from "../../../config/tmdb";

export const moviesAdapter = (movies) => {
	return movies.map((movie) => {
		return {
			id: movie.id,
			name: movie.title,
			description: movie.overview,
			poster: TMDB.images.poster_high_quality + movie.poster_path,
			backdrop: TMDB.images.backdrop_high_quality + movie.backdrop_path,
			rating: movie.vote_average,
		};
	});
};

import { TMDB } from "../../../config/tmdb";

export const seriesAdapter = (series) => {
	return series.map((serie) => {
		return {
			id: serie.id,
			name: serie.name,
			description: serie.overview,
			poster: TMDB.images.poster_high_quality + serie.poster_path,
			backdrop: TMDB.images.backdrop_high_quality + serie.backdrop_path,
			rating: serie.vote_average,
		};
	});
};

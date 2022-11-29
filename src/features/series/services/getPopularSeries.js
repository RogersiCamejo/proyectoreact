import { TMDB } from "../../../config/tmdb";
import { seriesAdapter } from "../adapter/seriesAdapter";

export const getPopularSeries = async () => {
	const res = await TMDB.api.get(TMDB.path.series.popular);
	const seriesAdapted = seriesAdapter(res.data.results);

	return seriesAdapted;
};

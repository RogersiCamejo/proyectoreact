import React from "react";
import { useAuth } from "../../../auth/context/AuthProvider";
import Banner from "../../../common/components/banner/Banner";
import Slider from "../../../common/components/slider/Slider";
import useFetch from "../../../common/hooks/useFetch";
import { getPopularSeries } from "../services/getPopularSeries";

const SeriesView = () => {
	const { data, error, isLoading } = useFetch(getPopularSeries);

	const { isAuth, login, logout } = useAuth();
	console.log(isAuth, login, logout);

	return (
		<>
			<Banner item={data[0]} />
			<Slider items={data} />
		</>
	);
};

export default SeriesView;

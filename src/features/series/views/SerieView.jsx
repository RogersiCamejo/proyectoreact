import React from "react";
import { useLocation, useParams } from "react-router-dom";

const SerieView = () => {
	const location = useLocation();
	const { id } = useParams();

	// fetch trailer

	return <div>detalles, trailer, lo que sea serie</div>;
};

export default SerieView;

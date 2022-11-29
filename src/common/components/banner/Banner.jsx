import React from "react";

const Banner = ({ item }) => {
	return (
		<div
			className="banner"
			style={{ backgroundImage: `url(${item?.backdrop})` }}
		>
			<div className="bannerContainer">
				<h1>{item?.name}</h1>
				<p>{item?.description}</p>
				<div>
					<button className="button">Reproducir</button>
					<button className="button button-alt">
						Más Información
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;

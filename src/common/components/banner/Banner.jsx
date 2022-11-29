import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
					<button className="button">
						<FontAwesomeIcon icon="fa-solid fa-play" /> Reproducir
					</button>
					<button className="button button-alt">
						<FontAwesomeIcon icon="fa-solid fa-circle-info" /> Más
						Información
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;

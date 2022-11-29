import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		/* navigate("/movie", {
      state: item,
    }); */

		navigate(`/movie/${item.id}`);
	};

	return (
		<div
			className="cardSlider"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop})`,
			}}
		>
			<div className="titleContainer">
				<h1>{item.name}</h1>
			</div>
		</div>
	);
};

export default Card;

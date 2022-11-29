import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";
import { sliderProps } from "./props/sliderprops";

const Slider = ({ items }) => {
	return (
		<>
			<Swiper {...sliderProps} className="swiperCards">
				{items.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<Card item={item} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Slider;

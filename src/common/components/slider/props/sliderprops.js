import { Navigation, Pagination } from "swiper";

export const sliderProps = {
	slidesPerView: 1,
	grabCursor: true,

	centeredSlides: true,
	spaceBetween: 10,
	loop: true,
	breakpoints: {
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			centeredSlides: false,
		},
		1024: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			centeredSlides: false,
		},
	},
	scrollbar: false,
	navigation: true,
	pagination: false,
	modules: [Navigation, Pagination],
};

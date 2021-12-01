/* Slider */
document.addEventListener('DOMContentLoaded', function () {
	new Splide('.slider', {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		arrows: false,
	}).mount();
});


/*Highlight location slider*/
document.addEventListener('DOMContentLoaded', function () {
	new Splide('.location-highlight__wrapper', {
		perPage: 5,
		perMove: 1,
		pagination: false,
	}).mount();
});

/* Suggest from Luxstay */
document.addEventListener('DOMContentLoaded', function () {
	new Splide('.content-suggest__section-list', {
		perPage: 4,
		perMove: 1,
		pagination: false,
		classes: {
			arrow: 'splide__arrow my__splide__arrows',
		}
	}).mount();
});

/* Suggest discover */


document.addEventListener('DOMContentLoaded', function () {
	new Splide('.content__suggest-discover-slider', {
		perPage: 3,
		perMove: 1,
		pagination: false,
	}).mount();
});


/* How to use  */
document.addEventListener('DOMContentLoaded', function () {
	new Splide('.howtouse-section__body', {
		perPage: 3,
		perMove: 1,
		pagination: false,
	}).mount();
});
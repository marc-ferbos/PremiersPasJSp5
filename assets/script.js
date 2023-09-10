const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
let tagLineElement = document.querySelector('.tagline');


leftArrow.addEventListener('click', function () {
	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide--;
	}
	updateSlide();
	
	/*currentSlide = ( currentSlide === 0 ) ? slides.length - 1 : currentSlide - 1;*/
	/*currentSlide = ( currentSlide -1 + slides.length ) % slides.length;*/
	/*document.querySelector('.tagLine').innerHTML = slides[currentSlide].tagLine;*/
});

rightArrow.addEventListener('click', function () {
	if (currentSlide === (slides.length - 1)) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	updateSlide();

});

/* Création fonction pour mettre à jour les slides */

function updateSlide() {
	tagLineElement.innerHTML = slides[currentSlide].tagLine;
	bannerImage.src = 'assets/images/slideshow/' + slides[currentSlide].image + '' ;
	console.log(slides[currentSlide].tagLine);
	updateDots();
}
/* Création fonction des dots */

function createDots() {
	const dots = document.querySelector('.dots');
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		if (i === 0) {
			dot.classList.add('dot_selected');
		}
		dot.classList.add('dot');
		dot.addEventListener('click', function () {
			currentSlide = i;
			updateSlide();
		});
		dots.appendChild(dot);
	}
}
createDots();


/* Création fonction mettre à jour les dots */

function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach(function (dot) {
		dot.classList.remove('dot_selected');
	});
	dots[currentSlide].classList.add('dot_selected');
}

/* Création fonction pour faire défiler les slides automatiquement */

function autoSlide() {
	setInterval(function () {
		if (currentSlide === (slides.length - 1)) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		updateSlide();
	}, 5000);
}
autoSlide();











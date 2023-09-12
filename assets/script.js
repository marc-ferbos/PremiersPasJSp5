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
		const dot = document.createElement('div'); /*Pour chaque diapositive on créer un nouvel élément div*/
		if (i === 0) { 
			dot.classList.add('dot_selected'); /*Si l'indice i est égal à 0 alors la classe CSS dot_selected est ajoutée à l'élément <div> */
		}
		dot.classList.add('dot');
		dot.addEventListener('click', function () {
			currentSlide = i;/* Lorsque l'utilisateur clique sur un point la diapo en question s'affiche */
			updateSlide();
		});
		dots.appendChild(dot); /* l'élément div est ajouté à l'élément parent avec la classe 'dots' */
	}
}
createDots();


/* Création fonction mettre à jour les dots */

function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach(function (dot) { /* Pour chaqque point on retire la classe CSS dot_selected */
		dot.classList.remove('dot_selected');
	});
	dots[currentSlide].classList.add('dot_selected'); /* on ajoute la classe CSS dot_selected au point qui correspond à la diapositive actuellement affichée */
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











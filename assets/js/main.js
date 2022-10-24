/* ###################################################################### */
/* # 																	# */
/* # 					  	  PRECHARGEMENT								# */
/* # 																	# */
/* ###################################################################### */

// Chargement de la page, ajoute un cercle qui tourne le temps que la page charge
const preloader = document.querySelector('.preloader-wrapper');
const loading = document.querySelector('body');

// Quand la page est chargée, alors on affiche la page
window.addEventListener('load', function () {
	preloader.classList.add('fade-out'); // On dit de jouer l'animation de fondu
	loading.classList.remove('notLoaded'); // On dit d'afficher toute la page
});

/* ###################################################################### */
/* # 																	# */
/* # 					  	  	THEME									# */
/* # 																	# */
/* ###################################################################### */

// On crée un cookie comme ça, le thème sera chargé à chaque fois que l'utilisateur arrive sur la page
const LOCAL_STORAGE_KEY = 'toggle-bootstrap-theme';
const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// On indique où se situe le fichier css pour le mode sombre
const DARK_THEME_PATH = 'assets/css/dark-style.css';
// On indique l'identifiant de la balise pour le fichier css du mode sombre
const DARK_STYLE_LINK = document.getElementById('dark-theme-style');
// On indique l'identifiant du bouton qui switch le thème
const THEME_TOGGLER = document.getElementById('theme-toggler');
let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;
// On check si l'utilisateur à le thème sombre ou non en cookie
if (isDark) {
	enableDarkTheme();
} else {
	disableDarkTheme();
}
// On indique le thème dans un cookie, enfin une session locale
function toggleTheme() {
	isDark = !isDark;
	if (isDark) {
		enableDarkTheme();
	} else {
		disableDarkTheme();
	}
	const META = { isDark };
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
}
function enableDarkTheme() {
	DARK_STYLE_LINK.setAttribute('href', DARK_THEME_PATH);
	THEME_TOGGLER.innerHTML = `<i class="fa-solid fa-moon"></i>`; // On en profite pour change le contenu du bouton pour afficher une autre icône
}
function disableDarkTheme() {
	DARK_STYLE_LINK.setAttribute('href', '');
	THEME_TOGGLER.innerHTML = `<i class="fa-solid fa-sun"></i>`; // On en profite pour change le contenu du bouton pour afficher une autre icône
}

/* ###################################################################### */
/* # 																	# */
/* # 					   BARRE DE NAVIGATION							# */
/* # 																	# */
/* ###################################################################### */

// Dès que l'utilisateur clique sur les 3 barres en afficahge mobile, le site va jouer l'animation
// et afficher le contenu de la barre de naviagtion
document.addEventListener('click', function (e) {
	// Hamburger menu
	if (e.target.classList.contains('hamburger-toggle')) {
		e.target.children[0].classList.toggle('active');
	}
});

/* ###################################################################### */
/* # 																	# */
/* # 						   REVENIR EN HAUT 							# */
/* # 																	# */
/* ###################################################################### */

// Revenir au haut de la page (code provenant de W3C)

let mybutton = document.getElementById('goTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

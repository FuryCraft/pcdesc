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
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate(
			{
				scrollTop: 0,
			},
			40,
		);
		return false;
	});
});
function downloadFile(url, fileName) {
	fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
		.then((res) => res.blob())
		.then((res) => {
			const aElement = document.createElement('a');
			aElement.setAttribute('download', fileName);
			const href = URL.createObjectURL(res);
			aElement.href = href;
			// aElement.setAttribute('href', href);
			aElement.setAttribute('target', '_blank');
			aElement.click();
			URL.revokeObjectURL(href);
		});
}

let sourcecode = document.getElementById('sourcecode');

sourcecode.addEventListener('click', function () {
	downloadFile('https://github.com/FuryCraft/webpage-as-homework/archive/refs/heads/master.zip', 'PCDesc - Codesource.zip');
});

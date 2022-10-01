// Changement de thème (code provenant d'une source externe)
const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";
const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
// you can change this url as needed
const DARK_THEME_PATH = "assets/css/dark-style.css";
const DARK_STYLE_LINK = document.getElementById("dark-theme-style");
const THEME_TOGGLER = document.getElementById("theme-toggler");
let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;
// check if user has already selected dark theme earlier
if (isDark) {
  enableDarkTheme();
} else {
  disableDarkTheme();
}
/**
 * Apart from toggling themes, this will also store user's theme preference in local storage.
 * So when user visits next time, we can load the same theme.
 *
 */
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
  DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
  THEME_TOGGLER.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}
function disableDarkTheme() {
  DARK_STYLE_LINK.setAttribute("href", "");
  THEME_TOGGLER.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

// Revenir au haut de la page (code provenant de W3C)
// Get the button:
let mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
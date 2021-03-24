import refs from './refs.js';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.themeSwitch.addEventListener('change', onCheckboxClick);

const savedDarkTheme = localStorage.getItem(Theme.DARK);
if (savedDarkTheme) {
    refs.body.classList.add('dark-theme');
    refs.themeSwitch.checked = true;
}

function onCheckboxClick(evt) {
    const value = evt.target.value;

    refs.body.classList.contains('dark-theme') ? lightTheme(value) : darkTheme(value);
}

function toggleClass(classToAdd, classToRemove) {
    refs.body.classList.add(classToAdd);
    refs.body.classList.remove(classToRemove);
}

function saveThemeToLocalStorage(saveTheme, removeTheme, value) {
    localStorage.setItem(saveTheme, value);
    localStorage.removeItem(removeTheme);
}

function darkTheme(value) {
    toggleClass('dark-theme', 'light-theme');
    saveThemeToLocalStorage(Theme.DARK, Theme.LIGHT, value);
}

function lightTheme(value) {
    toggleClass('light-theme', 'dark-theme');
    saveThemeToLocalStorage(Theme.LIGHT, Theme.DARK, value);
}
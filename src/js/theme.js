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

function darkTheme(value) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
    localStorage.setItem(Theme.DARK, value);
    localStorage.removeItem(Theme.LIGHT);
}

function lightTheme(value) {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
    localStorage.setItem(Theme.LIGHT, value);
    localStorage.removeItem(Theme.DARK);
}
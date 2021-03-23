import menuItemTemplate from '../templates/menu-item.hbs';
import menuItems from '../menu.json';
import refs from './refs.js';

const menuItemsMarkup = menuItemTemplate(menuItems);

refs.menu.insertAdjacentHTML('beforeend', menuItemsMarkup);
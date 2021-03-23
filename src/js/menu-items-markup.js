import menuItemTemplate from '../templates/menu-item.hbs';
import menuItems from '../menu.json';
import refs from './refs.js';

const menuItemsMarkup = menuItemTemplate(menuItems);

refs.menu.insertAdjacentHTML('beforeend', menuItemsMarkup);



// const lazyImages = document.querySelectorAll('img[loading="lazy"]');
// console.log(lazyImages);

// if ('loading' in HTMLImageElement.prototype) {
//     lazyImages.forEach(img => {
//         img.src = img.dataset.src;
//     })
// } else {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js';
//     script.integrity = 'sha512-JrL1wXR0TeToerkl6TPDUa9132S3PB1UeNpZRHmCe6TxS43PFJUcEYUhjJb/i63rSd+uRvpzlcGOtvC/rDQcDg==';
//     script.crossorigin = 'anonymous';

//     document.body.appendChild(script);
// }
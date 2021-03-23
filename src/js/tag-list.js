import menuItems from '../menu.json';

const renderTagList = menuItems => {
    return menuItems.map(({ingredients}) => {
        return ingredients.map(ingredient => {
            return `<li class="tag-list__item">${ingredient}</li>`
        })
    })
}

const arrayOfTagLists = renderTagList(menuItems);
const tagListRefs = document.querySelectorAll('.tag-list');

tagListRefs.forEach((ref, idx) => {
    ref.insertAdjacentHTML('beforeend', arrayOfTagLists[idx].join(''));
});
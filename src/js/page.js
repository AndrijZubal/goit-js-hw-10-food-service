import itemPage from "../page.hbs";
import menu from "../menu.json";

const itemRef = document.querySelector('.js-menu')
const gallery = itemPage(menu);
itemRef.insertAdjacentHTML('afterbegin', gallery)
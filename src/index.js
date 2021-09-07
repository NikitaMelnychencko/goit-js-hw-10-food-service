import './sass/main.scss';
import menu from './menu.json'
import dishesCards from './templates/dishes-cards.hbs'

// menu-toggle
// const user = {
//   name: 'Mango',
//   age: 2,
// };
// console.log(JSON.stringify(user));
// const savedUserData = '{"name":"Mango","age":2}';
// console.log(JSON.parse(savedUserData));
// console.log(localStorage);
// localStorage.setItem('my-data',JSON.stringify(user))
// const saveData = localStorage.getItem('my-data')
// const parsedData = JSON.parse(saveData)
// console.log('parsedData',parsedData);

const refMenu = document.querySelector('.js-menu');
const markup = dishesCards(menu);
refMenu.insertAdjacentHTML('beforeend',markup)

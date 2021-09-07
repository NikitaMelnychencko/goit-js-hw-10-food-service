import './sass/main.scss';
import menu from './menu.json'
import dishesCards from './templates/dishes-cards.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refBody = document.querySelector('body')
const refCheckBox = refBody.querySelector('.theme-switch__control')
const refInput = refCheckBox.querySelector('.theme-switch__toggle')
const refMenu = refBody.querySelector('.js-menu');

refInput.setAttribute("checked", "true")
const localStorageValue = localStorage.getItem('Theme')
//check Local Storage 
if (localStorageValue==='dark-theme') {
  refInput.checked = false
  refBody.classList.add(Theme.DARK)
} else {
 refBody.classList.add(Theme.LIGHT) 
}
//theme switcher
refCheckBox.addEventListener('change', e => {
  if (e.target.nodeName!=='INPUT') {
    return
  }
  refBody.classList.toggle(Theme.LIGHT)
  refBody.classList.toggle(Theme.DARK)

  if (refBody.className==='dark-theme') {
   localStorage.setItem('Theme', 'dark-theme') 
  }else{
    localStorage.removeItem('Theme')
  }
  
})
//templating and gallery parsing
const markup = dishesCards(menu);
refMenu.insertAdjacentHTML('beforeend',markup)

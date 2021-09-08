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

const localStorageValue = localStorage.getItem('Theme') || Theme.LIGHT
refInput.setAttribute("checked", "false")
refInput.checked = localStorageValue === Theme.DARK
addClass(localStorageValue)

//theme switcher
refCheckBox.addEventListener('change', e => {
  if (e.target.nodeName!=='INPUT') {
    return
  }
  removeValue(Theme.LIGHT, Theme.DARK)
  if (e.target.checked) {
   localStorage.setItem('Theme', 'dark-theme') 
  }else{
    localStorage.removeItem('Theme')
  }
  
})
//templating and gallery parsing
const markup = dishesCards(menu);
refMenu.insertAdjacentHTML('beforeend', markup)

function addClass(color) {
  refBody.classList.add(color)
}
function removeValue(light, dark) {
  refBody.classList.toggle(light)
  refBody.classList.toggle(dark)
}
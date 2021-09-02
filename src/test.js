import './sass/main.scss';
import { alert, error, info } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';


const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#search'),
    container: document.querySelector('.container')
};

refs.input.addEventListener('input', debounce(onTextInput, 500));

function onTextInput(e) {
    e.preventDefault();
    removeMarkup();
    const name = e.target.value
  
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => response.json())
        .then(data => renderCollection(data))
        .catch(err => console.log(err))

        // .catch(err => {
        //     console.log(err)
        //     onError(name)
        // })
};

// function onError(name) {
//    alert({ text: `По запросу "${name}" ничего не найдено` })
// }

function createCountry({ name, population, flag, capital, languages }) {
    const language = languages.map(el => `<li>${el.name}</li>`).join(' ')
    const country = `
    <article class="article">
     <h1 class="country">${name}</h1>
   <img src="${flag}" alt="flag">
     <p class="country_text"><span class="country_info">Capital:</span> ${capital}</p>
     <p class="country_text"><span class="country_info">Population:</span> ${population}</p>
     <ul class="country_text"><span class="country_info">Languages:</span> ${language}</ul>
   </article>
   `
    refs.container.insertAdjacentHTML('beforeend', country)
 }


function createCountries({ name }) {
    const countriesList = `
    <ul>
     <li class="country_text">${name}</li>
    </ul>
    `
    refs.container.insertAdjacentHTML('beforeend', countriesList)
 }

function removeMarkup() {
    refs.container.innerHTML = ' ';
}

function renderCollection(arr) {
    if (arr.length === 1) {
        arr.forEach(el => createCountry(el))
    }
    else if (arr.length <= 10 && arr.length > 1) {
        arr.forEach(el => createCountries(el))
    }
    else if (arr.length > 10) {
        info({ text: 'Too many matches found. Please enter a more specific query!' })
    }
    else {
        error ({ text: 'No results' })
     }
}




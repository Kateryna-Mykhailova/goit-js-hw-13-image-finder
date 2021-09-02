// import './apiService'
// import onSearch from './apiService'
import NewsApiService from './apiService';
import './sass/main.scss';
import { alert, error, info } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';

const refs = {
    form: document.querySelector('#search-form'),
    btnLoadMore: document.querySelector('[data-action="load-more"]')
    // input: document.querySelector('#search'),
    // container: document.querySelector('.container')
};


const newsApiService = new NewsApiService()

refs.form.addEventListener('submit', onSearch)
refs.btnLoadMore.addEventListener('click', onLoadMore)

export default function onSearch(e) {
    e.preventDefault();
    newsApiService.name = e.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles()
    
};

function onLoadMore() {
    newsApiService.fetchArticles()
 }


// function onSearch(e) {
//     e.preventDefault();
//     // removeMarkup();
//     // const name = e.target.value
//     const name = e.currentTarget.elements.query.value
//     console.log(name);
  
//    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=3&per_page=12&key=23204413-d213403835507960634485f04`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))

    
// };






// refs.input.addEventListener('input', debounce(onTextInput, 500));

// function onTextInput(e) {
//     e.preventDefault();
//     removeMarkup();
//     const name = e.target.value
  
//     fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=23204413 - d213403835507960634485f04`)
//         .then(response => response.json())
//         .then(data => renderCollection(data))
//         .catch(err => console.log(err))

        // .catch(err => {
        //     console.log(err)
        //     onError(name)
        // })
// };

// // function onError(name) {
// //    alert({ text: `По запросу "${name}" ничего не найдено` })
// // }

// function createCountry({ name, population, flag, capital, languages }) {
//     const language = languages.map(el => `<li>${el.name}</li>`).join(' ')
//     const country = `
//     <article class="article">
//      <h1 class="country">${name}</h1>
//    <img src="${flag}" alt="flag">
//      <p class="country_text"><span class="country_info">Capital:</span> ${capital}</p>
//      <p class="country_text"><span class="country_info">Population:</span> ${population}</p>
//      <ul class="country_text"><span class="country_info">Languages:</span> ${language}</ul>
//    </article>
//    `
//     refs.container.insertAdjacentHTML('beforeend', country)
//  }


// function createCountries({ name }) {
//     const countriesList = `
//     <ul>
//      <li class="country_text">${name}</li>
//     </ul>
//     `
//     refs.container.insertAdjacentHTML('beforeend', countriesList)
//  }

// function removeMarkup() {
//     refs.container.innerHTML = ' ';
// }

// function renderCollection(arr) {
//     if (arr.length === 1) {
//         arr.forEach(el => createCountry(el))
//     }
//     else if (arr.length <= 10 && arr.length > 1) {
//         arr.forEach(el => createCountries(el))
//     }
//     else if (arr.length > 10) {
//         info({ text: 'Too many matches found. Please enter a more specific query!' })
//     }
//     else {
//         error ({ text: 'No results' })
//      }
// }


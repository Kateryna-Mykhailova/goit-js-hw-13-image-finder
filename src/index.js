// import './apiService'
// import onSearch from './apiService'
import NewsApiService from './apiService';
import LoadMoreBtn from './load-more-btn';
import './sass/main.scss';
import { alert, error, info } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';

const refs = {
    form: document.querySelector('#search-form'),
    btnLoadMore: document.querySelector('[data-action="load-more"]'),
    // input: document.querySelector('#search'),
    container: document.querySelector('.container'),
    galleryList: document.querySelector('.gallery-list'),
};


const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true
});

refs.form.addEventListener('submit', onSearch)
refs.btnLoadMore.addEventListener('click', onLoadMore)
refs.btnLoadMore.addEventListener('click', handleBtnClick)
loadMoreBtn.refs.button.addEventListener('click', onLoadMore)


export default function onSearch(e) {
    e.preventDefault();
    clearGallery();
    newsApiService.name = e.currentTarget.elements.query.value;

    if (newsApiService.name === '') {
        return alert ({ text: 'Enter texts to search' })
    }
  loadMoreBtn.show();
  loadMoreBtn.disable();
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(data => {  createGallery(data),
      loadMoreBtn.enable()}
    
  )
  
};

function onLoadMore() {
  loadMoreBtn.disable();
    // newsApiService.fetchArticles().then(hits => console.log(hits))
    newsApiService.fetchArticles().then(data => {  createGallery(data),
      loadMoreBtn.enable()})
    
 }


function createGallery(hits) {
    const images = hits.map(el => createElement(el));
};


function createElement({webformatURL, largeImageURL, likes, views, comments, downloads}){

    const galleryElement =
    ` 
     <li class="gallery"  >
     <div class="photo-card">
  <img src="${webformatURL}" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${ comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
       ${downloads}
    </p>
  </div>
</div>
     </li>
    `
    refs.galleryList.insertAdjacentHTML('beforeend', galleryElement)
    
};


function clearGallery() {
   refs.galleryList.innerHTML = ' ';
 }

 const element = document.getElementById('box');
console.log(element);
function handleBtnClick() {
  setTimeout(() => {element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
}) }, 700)
     ;
 }



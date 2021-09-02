// 
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=23204413 - d213403835507960634485f04
// export default function onSearch(e) {
//     e.preventDefault();

//     const name = e.currentTarget.elements.query.value
//     console.log(name);
  
//    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=3&per_page=12&key=23204413-d213403835507960634485f04`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
    
// };

export default class NewsApiService {
    constructor() {
        this.name = '';
        this.page = 1;
     };
 
    fetchArticles() {
        console.log(this);
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.name}&page=${this.page}&per_page=12&key=23204413-d213403835507960634485f04`;

    fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            console.log(data);
            this.page += 1
        })
        .catch(err => console.log(err))
    };

    resetPage() {
        this.page = 1;
    }

    get searchName() {
        return this.name
    }

    set searchName(newName) {
        this.name = newName;
    }
}

export default class NewsApiService {
    constructor() {
        this.name = '';
        this.page = 1;
     };
 
    fetchArticles() {
        // console.log(this);
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.name}&page=${this.page}&per_page=12&key=23204413-d213403835507960634485f04`;

    return fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => { console.log(data)
            this.page += 1;
            return data.hits
       
          
        })  
        .catch(err => {
            console.log(err);
            // error ({ text: 'No results' })
        })
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

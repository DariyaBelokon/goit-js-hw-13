
// export async function fetchImages(query, pageNumber) {
//     const API_KEY = '23283134-c8a2ea14ef604470028f9ac80';
//     const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`;
//     const data = await fetch(URL);
//     const images = await data.json();
//     return images.hits;

// }
 import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23283134-c8a2ea14ef604470028f9ac80';

export default class PhotosApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchPhotos() {
        console.log(this);
        const PARAMETERS = `q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
        const url = `${BASE_URL}?key=${API_KEY}&${PARAMETERS}`;

        const response = await axios.get(url);
        return response.data;
    }

    incrementPage() {
        this.page +=1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
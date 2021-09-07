export default function getRefs() {
    return {
        searchForm: document.getElementById('search-form'),
        input: document.querySelector('input'),
        submitBtn: document.querySelector('button[type="submit"]'),
        gallery: document.querySelector('.gallery'),
        loadMoreBtn: document.querySelector('.load-more'),
    };
}
const search = document.querySelector('#js-search');
const searchInput = search.querySelector('input');
search.addEventListener('submit', function(e){
    e.preventDefault();
    window.location.href = `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${searchInput.value}`;
    searchInput.value = '';
    return false;
});
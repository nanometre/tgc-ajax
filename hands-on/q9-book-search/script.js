let baseSearchURL = 'http://openlibrary.org/search';
let btn = document.querySelector('#search-btn');
let results = document.querySelector('#search-results');

btn.addEventListener('click', async function(){
    let searchInput = document.querySelector('#search-input').value.toLowerCase();
    searchInput = searchInput.replace(/ /g, '+');

    let response = await axios.get(baseSearchURL + '.json?title=' + searchInput);
    let booksList = response.data.docs;
    // console.log(booksList)
    results.innerHTML = '<ul></ul>'
    for (let book in booksList) {
        results.innerHTML += 
        `<li>${booksList[book].title}. 
        Written by ${booksList[book].author_name[0]} 
        (${booksList[book].number_of_pages_median} pages)</li>`
    }
})
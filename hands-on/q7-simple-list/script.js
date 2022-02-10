let loadBooksBtn = document.querySelector('#load-books')
let listBook = document.querySelector('#list-books')
let title = document.querySelector('#title')
API_URL = `https://anapioficeandfire.com/api/`

loadBooksBtn.addEventListener('click', async function(){
    let response = await axios.get(API_URL + 'books/')
    let data = response.data
    // console.log(data)
    title.style.display = 'block'

    for (let book of data) {
        let bookElement = document.createElement('li')
        bookElement.innerHTML = `${book.name} (${book.numberOfPages} pages)
                                 <ul></ul>`

        let listchar = bookElement.querySelector('ul')
        for (let char of book.povCharacters) {
            let response2 = await axios.get(char)
            let charElement = document.createElement('li')
            charElement.innerHTML = `${response2.data.name}`
            listchar.appendChild(charElement)
        }
        listBook.appendChild(bookElement)
    }
})
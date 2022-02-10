let btn = document.querySelector('button');
let quote = document.querySelector('#quote');
let url = "https://programming-quotes-api.herokuapp.com/quotes/random";

btn.addEventListener('click', async function(){
    let response = await axios.get(`${url}`);
    let data = response.data;
    quote.innerHTML = 
    `<p>${data.en}</p>
     <p>By: ${data.author}</p>`;
})
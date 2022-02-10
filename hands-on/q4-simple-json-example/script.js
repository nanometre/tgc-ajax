let btn = document.querySelector('#load-image-btn')
let artworkDiv = document.querySelector('#artwork')

btn.addEventListener('click', async function(){
    let response = await axios.get('artwork.json')
    let data = response.data

    artworkDiv.innerHTML += `
    <h1>${data.title}</h1>
    <img src="${data.image_url}">`
})


// PAUL'S SOLUTION
// document.querySelector("#link").href = "https://www.google.com";
// document.querySelector("#link").innerText = "Google";

// document.querySelector('#load-image-btn')
//     .addEventListener('click', async function(){
//         let response = await axios.get('artwork.json');
//         let artwork = response.data;
//         document.querySelector('#title').innerHTML = artwork.title;
//         document.querySelector('#image').src = artwork.image_url;
//     })
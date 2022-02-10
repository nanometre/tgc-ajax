let btn = document.querySelector('#load-btn');
let content = document.querySelector('#content')

btn.addEventListener('click', async function(){
    let response = await axios.get('contact.txt');
    let text = response.data;
    content.innerHTML = text
})

// PAUL"S SOLUTION
// document.querySelector('#load-btn')
//     .addEventListener('click',async function(){
//         let response = await axios.get('contact.txt');
//         console.log(response.data);

//         // appendChild can only append a
//         // HTML element

//         // before we can append child we
//         // must create the new element
//                 // first arg to createElement is the tag name of the element
//         let divElement = document.createElement('div');
//         divElement.innerText = response.data;

//         document.querySelector('#content').appendChild(divElement);

//     })
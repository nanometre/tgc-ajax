let loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', async function(){
    // WRONG WAY of doing this question
    // response1 get loaded then response2 get loaded

    // let response1 = await axios.get('file1.txt');
    // document.querySelector('#content').innerHTML = response1.data;

    // let response2 = await axios.get('file2.txt');
    // document.querySelector('#content').innerHTML += response2.data;

    // CORRECT WAY of doing this question
    // both files get loaded together
    let request1 = axios.get('file1.txt');
    let request2 = axios.get('file2.txt');

    let response1 = await request1;
    let response2 = await request2;

    let content = document.querySelector('#content');
    content.innerHTML = response1.data + response2.data;
})
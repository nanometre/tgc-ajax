let loadUserBtn = document.querySelector('#load-users-btn');
let content = document.querySelector('#display-users-content');

let url = "https://randomuser.me/api/?results=10";

loadUserBtn.addEventListener('click', async function(){
    let response = await axios.get(url);
    let userData = response.data.results;
    console.log(userData);
    
    for (let user of userData) {
        content.innerHTML += 
        `<p>${user.name.first} ${user.name.last}. 
          ${user.location.city}, ${user.location.country}</p>
          <img src="${user.picture.medium}"/>`;
    }

})
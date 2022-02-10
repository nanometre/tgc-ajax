let loadUserBtn = document.querySelector('#load-users-btn')
let searchUserBtn = document.querySelector('#search-user-btn')
let allUserList = document.querySelector('#all-users>ul')
let searchedUser = document.querySelector('#searched-user')

let allUser = []

loadUserBtn.addEventListener('click', async function(){
    allUserList.innerHTML = ''
    let response = await axios.get('users.json')
    // make response.data.users into a global scope, so that it can be used in the next addEventListener
    allUser = response.data.users

    for (let user of allUser) {
        // don't put line below outside of for loops
        let userElement = document.createElement('li')
        userElement.innerHTML = `${user.firstName} ${user.lastName} - ${user.emailAddress}`
        allUserList.appendChild(userElement)
    }
})

searchUserBtn.addEventListener('click', async function(){
    searchedUser.innerHTML = ''

    let searchID = document.querySelector('#user-id').value

    for (let user of allUser) {
        if (user.userId == searchID) {
            searchedUser.innerHTML = `${user.firstName} ${user.lastName}`
            break
        } else {
            searchedUser.innerHTML = `Person not found`
        }
    }

    if (!searchID) {
        searchedUser.innerHTML = 'Please enter an user ID'
    } 
})

// PAUL'S SOLUTION
// let allUsers=[];
// document.querySe lector('#load-users-btn')
//     .addEventListener('click', async function () {

//         let response = await axios.get('users.json');
//         let users = document.querySelector('#all-users');
//         allUsers = response.data.users; // store the data in the global variable
//                                             // for access later
//         for (let u of response.data.users) {
//             users.innerHTML += `<li>${u.firstName} ${u.lastName}
//                 (${u.emailAddress})</li>`
//         }
//     });

// document.querySelector('#btnFind')
//     .addEventListener('click', function () {
//         let searchBy = document.querySelector('#search').value;
//         let targetUser = null;
//         for (let u of allUsers) {
//             if (u.userId == searchBy) {
//                 targetUser = u;
//             }
//         }
//         alert(targetUser.firstName + " " + targetUser.lastName);
//     })
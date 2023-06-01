const user = document.getElementById('username');
let avatar = document.getElementById('url-input');
let userimage = document.querySelector('.userimage')
const comment = document.querySelector('.comment-area');
const chat = document.querySelector('.chat');
const button = document.querySelector('.button');
const radio = document.getElementById('no');
const date = new Date ().toLocaleString();

//https://i.pinimg.com/280x280_RS/ce/2c/e3/ce2ce3388fb2fd6d3687b41a558d9ad8.jpg

function capitalize(input) {
    input.value = input.value.trim().replace(/(^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });
}

user.addEventListener('input', function () {
    capitalize(this);
});

function checkSpam() {
    chat.innerHTML = comment.value.replace(/(viagra|xxx)/gi, "***");
};

function addNewMessage () {
    chat.insertAdjacentHTML('beforeend', `
    <div class="container">
        <img src="${avatar.value}" alt="лицо" class="userimage">
        <p class="username">${user.value}</p>
        <p class="message">${comment.value.replace(/(viagra|xxx)/gi, "***")}</p>
        <p class="date">${date}</p>
    </div>
`);
}

if(radio.checked) {
    user.value = "   ";
} 

// chat.innerHTML = `<div class="container">
//     <img src="${avatar.value}" alt="лицо" class="userimage">
//     <p class="username">Username</p>
//     <p class="message" >${comment.value.replace(/Viagra/g, "***")}</p>
//     <p class="date">${date}</p>
// </div>`
// };

function changeAvatar () {

    let newAvatars = [
    "img/avatar1.jpg",
    "img/avatar2.jpg",
    "img/avatar3.jpg",
    "img/avatar4.jpg",
    "img/avatar5.jpg",
];

if (avatar.value === "") {
    let randomAvatar = newAvatars[Math.floor(Math.random() * newAvatars.length)];
    userimage = randomAvatar;
} else {
    userimage = avatar.value;
};
}
button.addEventListener('click', addNewMessage);
button.addEventListener('click', changeAvatar);




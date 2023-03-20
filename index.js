const user = document.getElementById('username');
const avatar = document.getElementById('url-input');
const comment = document.querySelector('.comment-area');
const chat = document.querySelector('.chat');
const button = document.querySelector('.button');
const radio = document.getElementById('no');
const date = new Date ().toLocaleString();

//https://i.pinimg.com/280x280_RS/ce/2c/e3/ce2ce3388fb2fd6d3687b41a558d9ad8.jpg

user.addEventListener('input', function () {
    capitalize(this);
});

function capitalize(user){
    user.value = user.value.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()});
};

function checkSpam() {
    chat.innerHTML = comment.value.replace(/Viagra/g, "***");
};

function addNewMessage () {
    chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="лицо" class="userimage">
    <p class="username">${user.value}</p>
    <p class="message" >${comment.value.replace(/Viagra/g, "***")}</p>
    <p class="date">${date}</p>
</div>` 

if(radio.checked) {
    user.value = "   ";
} 

chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="лицо" class="userimage">
    <p class="username">Username</p>
    <p class="message" >${comment.value.replace(/Viagra/g, "***")}</p>
    <p class="date">${date}</p>
</div>`

};
function changeAvatar () {

    const newAvatar = [
    "avatar1.jpg",
    "avatar2.jpg",
    "avatar3.jpg",
    "avatar4.jpg",
    "avatar5.jpg",
];

if (avatar === "") {
    let randomAvatar = newAvatar[Math.floor((Math.random() * 5) * newAvatar.length)];
    avatar = randomAvatar;
} else {
    avatar = avatar;
};

};

button.addEventListener('click', addNewMessage);
button.addEventListener('click', changeAvatar);




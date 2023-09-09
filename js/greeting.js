const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");

const USER_NAME = "username";
const HIDDEN_CLASS = "hidden";

savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit', userNameHandler);
} else {
    greetingUsers(savedUserName);
}

function userNameHandler(event) {
    event.preventDefault();
    const usernameInput = loginForm.querySelector("input").value
    console.log(usernameInput);
    localStorage.setItem(USER_NAME, usernameInput)
    greetingUsers(usernameInput)
    loginForm.classList.add(HIDDEN_CLASS)
}

function greetingUsers(username) {
    greeting.innerHTML = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASS)
}



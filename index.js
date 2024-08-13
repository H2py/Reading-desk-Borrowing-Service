const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginBtnClick() {
    console.dir(loginInput);
    console.log("click!!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);
const title = document.getElementById('title')
const nameField = document.getElementById('nameField')
const loginBtn = document.getElementById('login-btn')
const singupBtn = document.getElementById('singup-btn')


singupBtn.onclick = function(){
    title.innerHTML = "Sing Up"
    nameField.style.display = "block"
}

loginBtn.onclick = function(){
    title.innerHTML = "Login"
    nameField.style.display = "none"
}
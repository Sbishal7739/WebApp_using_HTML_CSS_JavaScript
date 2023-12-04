// fill the table

const deletePassword = (website) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdate = arr.filter((x) => {
        console.log(x.website);
        console.log(website);
        console.log(x.website !== website);
        return x.website !== website
    });
    console.log(arrUpdate);
    localStorage.setItem("passwords", JSON.stringify(arrUpdate));
    showPassword()
};

const showPassword = () => {
    let table = document.querySelector("table");
    let data = localStorage.getItem("passwords");

    if (data == null) {
        table.innerHTML = "No Data To Show";
    }
    else {
        table.innerHTML = `
        <tr>
            <th>Website</th>
            <th>Username</th>
            <th>Password</th>
            <th>Delete</th>
        </tr>
        `;
        let arr = JSON.parse(data);
        let str = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `
                <tr>
                    <td>${element.website} <img onclick="copyText('${element.website}')" src="copy.svg" alt="Copy" width="12" height="12"></td>
                    <td>${element.username} <img onclick="copyText('${element.username}')" src="copy.svg" alt="Copy" width="12" height="12"></td>
                    <td>${maskPassword(element.password)} <img onclick="copyText('${element.password}')" src="copy.svg" alt="Copy" width="12" height="12"></td>
                    <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
                </tr>
            `
        }
        table.innerHTML = table.innerHTML + str;
    }
}

function maskPassword(pass){
    let str = ""
    for (let i=0; i<pass.length; i++){
        str += "*"
    }
    return str
}

function copyText(txt){
    navigator.clipboard.writeText(txt)
    // alert("Copied the text: " + txt)
    document.querySelector('.alert').classList.remove("alert")
}

showPassword()
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();

    // Retrieve the website, username, and password input elements
    const websiteElement = document.getElementById('website');
    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');

    let passwords = localStorage.getItem('passwords');
    if (passwords == null) {
        let json = [];
        json.push({ website: websiteElement.value, username: usernameElement.value, password: passwordElement.value });
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: websiteElement.value, username: usernameElement.value, password: passwordElement.value });
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPassword();
});


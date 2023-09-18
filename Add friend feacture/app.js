const isStatus = document.querySelector("h3")
const addFriend = document.querySelector("#add")
let check = 0

addFriend.addEventListener("click", function () {
    if (check === 0) {
        isStatus.innerHTML = "Friend "
        isStatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        
        check++
    }
    else if(check === 1){
        isStatus.innerHTML = "Stranger "
        isStatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        check--
    }
})


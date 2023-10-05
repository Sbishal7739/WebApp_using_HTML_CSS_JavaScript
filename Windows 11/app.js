const taskbar = document.getElementsByClassName("taskbar")[0]
const startmenu = document.getElementsByClassName("startmenu")[0]


taskbar.addEventListener("click", () =>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    } else{
        startmenu.style.bottom = "50px"
    }
})




function display(data) {
    console.log(data)
}
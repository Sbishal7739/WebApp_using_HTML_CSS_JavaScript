const con = document.querySelector("#container")
const love = document.querySelector("i")

const a = con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = 0.8
    love.style.color = "red"

    setTimeout(() =>{
        love.style.opacity = 0
    },2000)

    setTimeout(() =>{
        love.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
})



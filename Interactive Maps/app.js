async function getData(place) {
    try {
        const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=1698f4e39289459db274eac118187c8c&location=Oxford,%20${place}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        const time = data.datetime;

        console.log(time);

        document.getElementById('timeP').innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);
    e.addEventListener("mouseover", function () {
        window.onmousemove = function (j) {
            x = j.clientX
            y = j.clientY
            document.getElementById('name').style.top = y - 60 + 'px'
            document.getElementById('name').style.left = x + 10 + 'px'
        }
        const classes = e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country => {
            country.style.fill = "blue"
        })
        document.getElementById("name").style.opacity = 1
        console.log(e.id);
        document.getElementById("namep").innerText = e.id
    })
    e.addEventListener("mouseleave", function () {
        const classes = e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country => {
            country.style.fill = "#ececec"
        })
        document.getElementById("name").style.opacity = 0
    })
    e.addEventListener("click", function () {
        getData(e.id);
    })
})





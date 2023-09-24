const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Siliguri';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'adcc8cacfcmsh1e0a5acbccfe442p10af64jsn4c82a314da64', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {

    weather.innerHTML = `<h2> Loading... </h2>`

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            return showWeather(response)

        })
}
const showWeather = (data) => {
    if(data.error === "An unexpected error occured."){
        weather.innerHTML = `
        <h2> City not found</h2>
        `
        return;
    }

    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="">
    </div>
    <div>
        <h2>${data.temp}&deg;C</h2>
        <h3> ${getWeatherCondition(data.temp)} </h3> 
    </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault()
    }
)

function getWeatherCondition(temp) {
    if (temp >= 30) {
        return 'hot';
    } else if (temp >= 25 && temp < 30) {
        return 'warm';
    } else if (temp >= 20 && temp < 25) {
        return 'moderate';
    } else if (temp >= 15 && temp < 20) {
        return 'mild';
    } else if (temp >= 10 && temp < 15) {
        return 'cool';
    } else if (temp >= 5 && temp < 10) {
        return 'chilly';
    } else if (temp >= 0 && temp < 5) {
        return 'cold';
    } else {
        return 'freezing';
    }
}





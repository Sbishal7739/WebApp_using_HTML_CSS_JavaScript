const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll('.dropdown select')
const btn = document.querySelector("#btn")
const fromCurrValue = document.querySelector(".from select")
const toCurrValue = document.querySelector(".to select")
const msg = document.querySelector(".msg")

for (let select of dropdown) {
    //console.log(select);
    for (let currencyCode in countryList) {
        //console.log(countryList[currencyCode]);
        let newOption = document.createElement("option")
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === "from" && currencyCode === "INR") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currencyCode === "USD") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (event) => {
        updateFlage(event.target)
    })
}

function updateFlage(element) {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
}

async function updateExchangeRate() {
    let amount = document.querySelector(".amount input")
    let amountVal = amount.value;
    if (amountVal === "" || amountVal < 1) {
        amount = 1;
        amountVal = "1";
    }

    let URL = `${BASE_URL}/${fromCurrValue.value.toLowerCase()}/${toCurrValue.value.toLowerCase()}.json`
    let responce = await fetch(URL)
    let data = await responce.json()
    let rate = data[toCurrValue.value.toLowerCase()]
    let finalAmount = (amountVal * rate).toFixed(2)
    msg.innerText = `${amountVal} ${fromCurrValue.value} = ${finalAmount} ${toCurrValue.value}`
}


btn.addEventListener("click", async (event) => {
    event.preventDefault();
    updateExchangeRate()
})

window.addEventListener("load", () => {
    updateExchangeRate()
})

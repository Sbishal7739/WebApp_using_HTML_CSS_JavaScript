function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
const item = document.querySelector("#items")
const dataContainer = document.querySelector("#data")
const generate = () => {
    if (isNaN(item.value) || item.value < 0 || item.value > 9) {
        const randomIndex = Math.floor(Math.random() * text.length)
        dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
    } else {
        const localText = shuffle(text);
        const data = localText.slice(0, item.value)
        const parars = data.map(
            (d) => {
                return `<p> ${d} </p>`
            }
        )
        console.log(parars)
        console.log(parars.join(""))
        dataContainer.innerHTML = parars.join("");
        // array to string
    }
}
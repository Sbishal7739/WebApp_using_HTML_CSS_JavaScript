const generateMemeBtn = document.querySelector('.meme-generator-btn')

const memeImage = document.querySelector('.memeImage')

const memeTitle = document.querySelector('.meme-title')

const memeAuthor = document.querySelector('.meme-author')


const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/programmingmemes")
    .then((response) => response.json())
    .then((data) =>{https://meme-api.com/gimme/wholesomememes
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme()


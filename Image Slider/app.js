const slides = document.querySelectorAll(".slider");
// console.log(slides.length)
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext = () => {
    if (counter < slides.length - 1) {
        console.log(counter);
        counter++;
        check()
    }
}
const goPrev = () => {
    if (counter > 0) {
        console.log('p');
        counter--;
        check()
    }
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
const check = () => {
    slides.forEach(
        (slide, index) => {
            if (index >= counter) {
                slideImage()
            }
        }
    )

}
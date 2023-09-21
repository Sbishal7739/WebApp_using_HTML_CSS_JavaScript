const rect = document.querySelector("#center");


rect.addEventListener("mousemove", (item) => {
    let rectangle = rect.getBoundingClientRect()
    // console.log(item.clientX);
    // console.log(rectangle.left);
    insideRectVal = item.clientX - rectangle.left

    if (insideRectVal < rectangle.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectangle.width / 2, 255, 0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4.easeOut // Correct the ease value
        });
    } else {
        let blueColor = gsap.utils.mapRange(rectangle.width / 2, rectangle.width, 0, 255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`, // Correct the backgroundColor value
            ease: Power4.easeOut // Correct the ease value
        });
    }
    
}
)

rect.addEventListener("mouseleave", ()=>{
    gsap.to(rect,{
        backgroundColor: "white"
    })
})
const buttons = document.querySelectorAll("[data-button-carousel")


//!Логика с кнопкамии и ограничениями
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const direction = button.dataset.buttonCarousel === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newActiveSlide = [...slides.children].indexOf(activeSlide) + direction
        if (newActiveSlide <= 0 && direction === -1) {
            button.disabled = true
        } 
        if (newActiveSlide >= slides.children.length && direction === 1) {
             button.disabled = true
        }

        if (newActiveSlide >= 0 && newActiveSlide < slides.children.length) {
            slides.children[newActiveSlide].dataset.active = true;
            delete activeSlide.dataset.active
        }
        button.disabled = false
        
    })
})



//! Логика с кнопками и бесконечной каруселью
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })



//! Логика без кнопок
// function startCarousel() {
//     const slides = document.querySelector("[data-slides]")
//         const activeSlide = slides.querySelector("[data-active]")
//         let newActiveSlide = [...slides.children].indexOf(activeSlide) + 1
//         if (newActiveSlide < 0) newActiveSlide = slides.children.length - 1
//         if (newActiveSlide >= slides.children.length) newActiveSlide = 0
        
//         slides.children[newActiveSlide].dataset.active = true;
//         delete activeSlide.dataset.active
// }

// setInterval(() => {
//     startCarousel()
// }, 1000)
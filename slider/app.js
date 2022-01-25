const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActineClasses()

        slide.classList.add('active')
    })
}

function clearActineClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
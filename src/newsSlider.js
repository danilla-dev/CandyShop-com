const sliderContainer = document.querySelector('.news-slider-container')
const slider = sliderContainer.querySelector('.slider')
const prevBtn = sliderContainer.querySelector('.slider__prev-btn')
const nextBtn = sliderContainer.querySelector('.slider__next-btn')
let slideIndex = 0
const slideCount = slider.children.length * 2 - 1

const slide = () => {
	slider.style.transform = `translateX(-${slideIndex * 50}%)`
}

const prevSlide = () => {
	if (slideIndex > 0) {
		slideIndex--
	} else {
		slideIndex = slideCount - 1
	}
	slide()
}
const nextSlide = () => {
	if (slideIndex < slideCount - 1) {
		slideIndex++
	} else {
		slideIndex = 0
	}
	slide()
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

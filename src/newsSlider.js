const sliderContainer = document.querySelector('.news-slider-container')
const slider = sliderContainer.querySelector('.slider')
const prevBtn = sliderContainer.querySelector('.slider__prev-btn')
const nextBtn = sliderContainer.querySelector('.slider__next-btn')
let slideIndex = 0
const slideCount = slider.children.length  - 1

const slide = () => {
	if (window.innerWidth >= 768) {
		slider.style.transform = `translateX(-${slideIndex * 30}%)`
	} else {
		slider.style.transform = `translateX(-${slideIndex * 50}%)`
	}
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
	let num
	window.innerWidth >= 768 ? (num = 2) : (num = 1)
	if (slideIndex < slideCount - num) {
		slideIndex++
	} else {
		slideIndex = 0
	}
	slide()
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

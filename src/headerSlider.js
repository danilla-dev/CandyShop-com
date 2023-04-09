const slider = document.querySelector('.slider')
const prevBtn = document.querySelector('.slider__prev-btn')
const nextBtn = document.querySelector('.slider__next-btn')

let slideIndex = 0
const slideCount = slider.children.length

let interval
const intervalTime = 4000

const setIndex = num => {
	if (slideIndex < slideCount - 1) {
		slideIndex = slideIndex + num
	} else {
		slideIndex = 0
	}
}

const slide = () => {
	console.log('dziala')
	slider.style.transform = `translateX(-${slideIndex * 100}%)`
}

const autoSlide = () => {
	interval = setInterval(() => {
		setIndex(+1)
		slide()
	}, intervalTime)
}

const clearSlideInterval = () => {
	clearInterval(interval)
	interval = setInterval(() => {
		setIndex(+1)
		slide()
	}, intervalTime)
}

const nextSlide = () => {
	clearSlideInterval()
	if (slideIndex < slideCount - 1) {
		slideIndex++
	} else {
		slideIndex = 0
	}
	slide()
}

const prevSlide = () => {
	clearSlideInterval()
	if (slideIndex > 0) {
		slideIndex--
	} else {
		slideIndex = slideCount - 1
	}
	slide()
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
document.addEventListener('DOMContentLoaded', autoSlide)

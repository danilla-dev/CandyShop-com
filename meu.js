const btn = document.querySelector('.nav__btn')
const menu = document.querySelector('.nav__menu')
const blur = document.querySelector('.blur')
const menuBtn = document.querySelector('.nav__menu-btn')
const dropdownUl = document.querySelector('.dropdown')
const categories = document.querySelector('.categories')

const showDropdown = () => {
	dropdownUl.classList.toggle('dropdown--active')
}

const setBlur = () => {
	const scrolPosition = document.documentElement.scrollTop || document.body.scrollTop
	blur.style.top = scrolPosition + 'px'
}

const checkWindowWidth = () => {
	dropdownUl.classList.remove('dropdown--active')
	if (window.innerWidth > 768) {
		menu.classList.remove('nav__menu--active')
		blur.style.display = 'none'
		btn.style.display = 'none'
		categories.removeEventListener('click', showDropdown)
	} else {
		btn.style.display = 'block'
		categories.addEventListener('click', showDropdown)
	}
}

const showMenu = e => {
	menu.classList.toggle('nav__menu--active')
	blur.style.display = 'block'
	btn.style.display = 'none'
	document.body.classList.add('remove-scrolling')
	dropdownUl.classList.remove('dropdown--active')
	setBlur()
}
const closeMenu = () => {
	menu.classList.remove('nav__menu--active')
	blur.style.display = 'none'
	btn.style.display = 'block'
	document.body.classList.remove('remove-scrolling')
}
const clikOutOfMenu = e => {
	if (!menu.contains(e.target) && !btn.contains(e.target) && window.innerWidth < 768) {
		closeMenu()
	}
}

menuBtn.addEventListener('click', closeMenu)

btn.addEventListener('click', showMenu)

window.addEventListener('click', clikOutOfMenu)

window.addEventListener('resize', checkWindowWidth)


document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 768) {
		categories.addEventListener('click', showDropdown)
	} else {
		categories.removeEventListener('click', showDropdown)
	}
})

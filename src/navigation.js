const burgerBtn = document.querySelector('.nav-btn')
const menu = document.querySelector('.nav-menu')
const closeMenuBtn = document.querySelector('.nav-menu__btn')
const blur = document.querySelector('.blur')
const dropdowns = document.querySelectorAll('.dropdown')
const categories = document.querySelector('.nav-menu__categories')
const arrows = document.querySelectorAll('.arrow')

// const checkWindowWidth = () => {
// 	if (window.innerWidth > 996) {
// 		menu.classList.remove('nav__menu--active')
// 		blur.style.display = 'none'
// 		btn.style.display = 'none'
// 		categories.removeEventListener('click', showDropdown)
// 	} else {
// 		btn.style.display = 'block'
// 		categories.addEventListener('click', showDropdown)
// 	}
// }



const showDropdown = e => {
	const category = e.target.closest('.nav-menu__category')
	const dropdown = category.querySelector('.dropdown')
	if (dropdown != null || e.target.parentElement.className == 'arrow') {
		dropdown.classList.toggle('dropdown--active')
	}
}
const setBlur = () => {
	const scrolPosition = document.documentElement.scrollTop || document.body.scrollTop
	blur.style.top = scrolPosition + 'px'
}
const closeMenu = () => {
	menu.classList.remove('nav-menu--active')
	blur.style.display = 'none'
	burgerBtn.style.display = 'block'
	document.body.classList.remove('remove-scrolling')
	dropdowns.forEach(dropdown => dropdown.classList.remove('dropdown--active'))
}
const showMenu = () => {
	menu.classList.add('nav-menu--active')
	blur.style.display = 'block'
	burgerBtn.style.display = 'none'
	document.body.classList.add('remove-scrolling')
	setBlur()
}
const clickOutOfMenu = e => {
	if (!menu.contains(e.target) && !burgerBtn.contains(e.target) && window.innerWidth < 996) {
		closeMenu()
	}
}
burgerBtn.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', closeMenu)
window.addEventListener('click', clickOutOfMenu)
// window.addEventListener('resize', checkWindowWidth)

document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 996) {
		categories.addEventListener('click', showDropdown)
	} else {
		categories.removeEventListener('click', showDropdown)
	}
})

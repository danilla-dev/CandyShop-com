const burgerBtn = document.querySelector('.nav-btn')
const menu = document.querySelector('.nav-menu')
const closeMenuBtn = document.querySelector('.nav-menu__btn')
const blur = document.querySelector('.blur')
const dropdowns = document.querySelectorAll('.dropdown')
const categories = document.querySelector('.nav-menu__categories')
const arrows = document.querySelectorAll('.arrow')
const actionsBar = document.querySelector('.actions')
const actionSearch = document.querySelector('.actions__search')
const actionSearchInput = document.querySelector('.actions__search-input')
const actionAccount = document.querySelector('.actions__account')
const actionBasket = document.querySelector('.actions__basket')
const actionSearchBtn = document.querySelector('.actions__search-btn')

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

const hideSearchInput = () => {
	actionsBar.style.borderRadius = '0 0 30% 30%'
	actionSearch.classList.remove('actions__search--active')
	actionSearchInput.classList.remove('actions__search-input--active')
	actionAccount.classList.remove('actions__account--hide')
	actionBasket.classList.remove('actions__basket--hide')
}

const showSearchInput = () => {
	// actionsBar.classList.add('.actions--active')
	actionsBar.style.borderRadius = '0'
	actionSearch.classList.add('actions__search--active')
	actionSearchInput.classList.add('actions__search-input--active')
	actionAccount.classList.add('actions__account--hide')
	actionBasket.classList.add('actions__basket--hide')
}

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
actionSearch.addEventListener('click', showSearchInput)
document.querySelector('.heading').addEventListener('click', e => {
	hideSearchInput()
})
document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 996) {
		categories.addEventListener('click', showDropdown)
	} else {
		categories.removeEventListener('click', showDropdown)
	}
})

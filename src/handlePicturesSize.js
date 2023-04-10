const images = document.querySelectorAll('img')

const resizeImages = () => {
	if (window.innerWidth >= 768) {
		images.forEach(image => {
			const src = image.getAttribute('src')
			if (src.includes('-sm')) {
				const newSrc = src.replaceAll('-sm.jpg', '-lg.jpg')
				image.setAttribute('src', newSrc)
			}
		})
	} else {
		images.forEach(image => {
			const src = image.getAttribute('src')
			if (src.includes('-lg')) {
				const newSrc = src.replaceAll('-lg.jpg', '-sm.jpg')
				image.setAttribute('src', newSrc)
			}
		})
	}
}
document.addEventListener('DOMContentLoaded', resizeImages)
window.addEventListener('resize', resizeImages)

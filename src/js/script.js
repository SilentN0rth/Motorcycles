const nav = document.querySelector('.nav')
const allSections = document.querySelectorAll('.section')
const navItems = document.querySelectorAll('.nav__item')
const navItem = document.querySelector('.nav__item')
const navBtn = document.querySelector('.nav__hamburger-btn')

// Nav
const toggleNav = () => {
	nav.classList.toggle('nav--active')
	document.body.classList.toggle('overflow-hidden')
	nav.classList.toggle('nav--animation')
}
const toggleLinks = e => {
	nav.classList.remove('nav--active')
	document.body.classList.remove('overflow-hidden')
	e.stopPropagation()
}

window.addEventListener('scroll', () => {
	allSections.forEach(section => {
		let top = window.scrollY
		let offset = section.offsetTop - 90
		let height = section.offsetHeight
		let id = section.getAttribute('id')
		if (top > offset && top <= offset + height) {
			navItems.forEach(links => {
				links.classList.remove('nav__item--active')
				if (id == links.getAttribute('href').slice(1)) {
					links.classList.add('nav__item--active')
				}
			})
		}
	})
})
navBtn.addEventListener('click', toggleNav)
navItems.forEach(item => {
	item.addEventListener('click', toggleLinks)
})
// End of Nav

// Footer year
const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
// End of Footer year

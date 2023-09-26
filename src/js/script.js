const footerYear = document.querySelector('.footer__year')

// // Footer year
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

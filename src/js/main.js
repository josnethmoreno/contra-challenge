import '../css/style.css'
import '../css/reset.css'
import '../css/icons.css'

import Splide from '@splidejs/splide/dist/js/splide'

const buttonRight = document.createElement('button')
buttonRight.innerText = '->'

const buttonLeft = document.createElement('button')
buttonLeft.innerText = '<-'

const splide = new Splide('.splide', {
	pagination: true,
	perPage: 1,
}).mount()

const totalPage = splide.length
const totalPageDiv = document.querySelector('.splide__total-page')
totalPageDiv.innerText = totalPage

let currentPage = splide.index + 1
let currentPageDiv = document.querySelector('.splide__current-page')
currentPageDiv.innerText = currentPage

splide.on('moved', function () {
	currentPage = splide.index + 1
	currentPageDiv = document.querySelector('.splide__current-page')
	currentPageDiv.innerText = currentPage
	// Do something with the current page number
})

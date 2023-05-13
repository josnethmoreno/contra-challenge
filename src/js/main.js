import '../css/style.css'
import '../css/reset.css'
import '../css/icons.css'

import Splide from '@splidejs/splide/dist/js/splide'

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


const pageName = {
	1: 'Flat screen TV',
	2: 'Terrace',
	3: 'Minibar',
	4: 'Pool'
}

const currentPageNameDiv = document.querySelector('.splide__name')
let currentPageName = pageName[currentPage]
currentPageNameDiv.innerText = `${currentPageName}`

splide.on('move', function () {
	currentPage = splide.index + 1
	currentPageDiv = document.querySelector('.splide__current-page')
	currentPageDiv.innerText = currentPage
	currentPageName = pageName[currentPage]
	currentPageNameDiv.innerText = `${currentPageName}`
})

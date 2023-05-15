import '../css/style.css'
import '../css/reset.css'
import '../css/icons.css'

import Splide from '@splidejs/splide/dist/js/splide'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

/* GSAP */
const tl = gsap.timeline()

tl.to('.hero-content', { duration: 1.2, x: 0, opacity: 1 }, 0)
	.to( '.hero-figure img', { 
		duration: 0, clipPath: 'inset(0 0 0 0)' 
	}, 0.6)

gsap.registerPlugin(ScrollTrigger)

gsap.to('.marquee', {
	scrollTrigger: {
		trigger: '.marquee',
		start: 'top bottom-=50px',
	},
	opacity: 1,
	duration: 0.3,
	ease: 'power2.in',
})

gsap.to('.areas-bathroom', {
	scrollTrigger: {
		trigger: '.areas-bathroom',
		start: 'top bottom-=350px',
	},
	clipPath: 'inset(0 0 0 0)',
	duration: 0.3,
	ease: 'power2.in',
})

gsap.to('.areas-desk', {
	scrollTrigger: {
		trigger: '.areas-desk',
		start: 'top bottom-=80px',
	},
	clipPath: 'inset(0 0 0 0)',
	duration: 0.3,
	ease: 'power2.in',
})

gsap.to('.footer-brand', {
	scrollTrigger: {
		trigger: '.footer-brand',
		start: 'top bottom-=250px',
	},
	opacity: 1,
	duration: 0.3,
	ease: 'power2.in',
})


/* SPLIDE CONFIG JS */
const splide = new Splide('.splide', {
	pagination: true,
	perPage: 1
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


/* NAV MENU */
const btnToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

btnToggle.addEventListener('click', () => {
	const showMenu = (navMenu.getAttribute('data-show') === 'true')
	navMenu.setAttribute('data-show', !showMenu)
})

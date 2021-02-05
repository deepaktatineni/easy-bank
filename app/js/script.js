const burgerMenu = document.querySelector('#menu')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const body =document.querySelector('body')

const fadeElems = document.querySelectorAll('.has-fade')


burgerMenu.addEventListener('click', () => {
  const isOpen = header.classList.contains('open')
  if(isOpen) {
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach(e => {
      e.classList.remove('fade-in')
      e.classList.add('fade-out')
    })
    return
  }
  body.classList.add('noscroll')
  header.classList.add('open')
  fadeElems.forEach(e => {
    e.classList.add('fade-in')
    e.classList.remove('fade-out')
  })
})
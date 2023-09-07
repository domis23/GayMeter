const wheelExtraExtra = document.querySelector('#wheelExtra')
const buttonExtra = document.querySelector('#button')
const buttonDiv = document.querySelector('#btn')
const divs = document.querySelectorAll('div')
const paragraphs = document.querySelectorAll('p')

const RotStart = () => {
  hide()
  setTimeout(reset, 7001)
  setTimeout(alercik, 7000)
  setTimeout(wheelrot, 4100)
  setTimeout(biggerBetter, 4000)
  // setTimeout(buttonText, 800)
  bigger()
}
const reset = () => {
  location.reload()
}
const biggerBetter = () => {
  wheelExtraExtra.classList.remove('bigger')
  wheelExtraExtra.classList.add('biggerBetter')
}
const buttonText = () => {
  buttonExtra.innerHTML = ''
}
const wheelrot = () => {
  wheelExtraExtra.classList.add('wheelRot')
}
const alercik = () => {
  alert("You're gay! 🥳")
}
const hide = () => {
  buttonExtra.classList.remove('button')
  buttonExtra.classList.add('buttonHide')
  // buttonExtra.classList.remove('button')
  // buttonExtra.classList.add('hideBtn')
  paragraphs[0].classList.remove('green', 'red')
  paragraphs[0].classList.add('hideText')
  paragraphs[1].classList.remove('green', 'red')
  paragraphs[1].classList.add('hideText')
  divs[1].classList.remove('literki')
  divs[1].classList.add('hideText')
}
const bigger = () => {
  wheelExtraExtra.classList.add('bigger')
}

buttonExtra.addEventListener('click', RotStart)

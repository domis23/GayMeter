const wheelExtraExtra = document.querySelector('#wheelExtra')
const buttonExtra = document.querySelector('#button')

const RotStart = () => {
  wheelExtraExtra.classList.add('wheelRot')
  setTimeout(alercik, 2100)
}

const alercik = () => {
  alert('Niestety 🤷‍♂️, tak bywa.')
}

buttonExtra.addEventListener('click', RotStart)

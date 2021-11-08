import "../style.css";


const imageContainerHtml = document.querySelector('.myImage')

const imgHTML = document.createElement('img')
imgHTML.className = 'img-item'
imgHTML.src = '../assets/js.jpg'

imageContainerHtml.append(imgHTML)
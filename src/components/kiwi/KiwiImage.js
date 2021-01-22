import Kiwi from '../../img/kiwi.jpg'

class KiwiImage {
  render() {
    const img = document.createElement('img')
    img.src = Kiwi
    img.alt = 'Kiwi'
    img.classList.add('kiwi-image')

    const bodyDomElement = document.querySelector('body')
    bodyDomElement.appendChild(img)
  }
}

export default KiwiImage
import './HelloWorldButton.scss'

class HelloWorldButton {
    buttonCssClass = 'hello-world-button'  // a class property

    render() {
        const button = document.createElement('button')
        button.innerHTML = 'Hello World'
        button.classList.add(this.buttonCssClass)

        button.onclick = () => {
            const p = document.createElement('p')
            p.innerHTML = 'Hello World'
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        const body = document.querySelector('body')
        body.appendChild(button)
    }
}

export default HelloWorldButton
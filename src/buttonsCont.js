export { buttonsContainer }

const buttonsContainer = ()=>{
const element = document.createElement('div')
element.classList.add('.buttonsContainer')
element.textContent = 'hello'

return element
}
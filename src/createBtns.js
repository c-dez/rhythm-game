export { createBtns }

const createBtns = ()=>{
    const btn = document.createElement('button')
    btn.style.height = '100px'
    btn.style.width = '100px'
    btn.style.backgroundColor = '#f3ea72'
    btn.style.border = '5px solid white'
    btn.style.borderRadius = '50%'


    return btn;
}
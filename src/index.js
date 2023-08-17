

import { buttonsContainer as buttonsElement  } from "./buttonsCont.js";
import { createBtns } from "./createBtns.js";


const buttons = document.querySelector('.buttons')


const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')

one.appendChild(createBtns())
three.appendChild(createBtns())



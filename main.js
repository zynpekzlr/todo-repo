import './style.css'
import { handleKeyPress } from './todo'

const todo_input=document.getElementById('todo_input')



todo_input.addEventListener('keypress',handleKeyPress)
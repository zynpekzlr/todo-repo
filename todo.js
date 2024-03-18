const item_list=document.getElementById('item-list')
const todo_input=document.getElementById('todo_input')
const total=document.getElementById('total')
const left=document.getElementById('left')
const comp=document.getElementById('comp')

const calculateTodoItems=()=>{
    const arr=[...item_list.children]
    const compTodos=arr.filter((item)=>item.classList.contains('comp_todo'))
    const leftTodos=arr.filter((item)=>item.children[0].style.
    textDecoration==='')

    total.innerText=arr.length>0?'Toplam :' + arr.length:''
    left.innerText=leftTodos.length>0?'Kalan :' + leftTodos.length:''
    comp.innerText=compTodos.length>0?'Tamamlanan :' + compTodos.length:''
    
}

const deleteHandler=(e)=>{
    const arr=[...item_list.children]
    const findedItem=arr.find((item)=>{
        return item.id===e.target.parentElement.id
    })
    if(!findedItem)return
    findedItem.remove()
    calculateTodoItems()
}
const ontoggle=(e)=>{
    if(e.target.style.textDecoration==='line-throught'){
        e.target.style.textDecoration=''
        e.target.style.color=''
        e.target.parentElement.classList.remove('comp_todo')

    }else{
        e.target.style.textDecoration='line-throught'
        e.target.style.color='rgb(11, 177, 5)'
        e.target.parentElement.classList.add('comp_todo')
    }
    calculateTodoItems()
}

const renderTodoItems=(todo)=>{
    const itemDiv=document.createElement('div')
    itemDiv.id=todo.todo
    itemDiv.classList.add('item')
    const textDiv=document.createElement('div')
    const deleteDiv=document.createElement('div')
    textDiv.innerText=todo.todo 
    deleteDiv.textContent='Sil'
    deleteDiv.style.color='red'
    itemDiv.append(textDiv,deleteDiv)
    item_list.appendChild(itemDiv)
    deleteDiv.addEventListener('click',deleteHandler)
    textDiv.addEventListener('click',ontoggle)
}

const isExist=(value)=>{
    const arr=[...item_list.children]
    const finded= arr.find((item)=>{ 
        return item.children[0].innerText.toLowerCase()===value.toLowerCase()
    })
    return finded?true:false
}

const clearInput=()=>{
    todo_input.value=''
}

const handleKeyPress=(e)=>{
    if(e.key==='Enter'){
        
        const _isExist= isExist(e.target.value)
        if(_isExist===true)return
        renderTodoItems({todo:e.target.value})
        clearInput()
        calculateTodoItems()
    }
}


export {handleKeyPress}
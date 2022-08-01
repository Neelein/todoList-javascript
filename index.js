const todoListAddItems = document.querySelector('.todo-list_add-items')
const todoListInput = document.querySelector('.todo-list_input')
const todoListItems = document.querySelector('.todo-list_items')

todoListAddItems.addEventListener('submit',(e) => {
    e.preventDefault()

    const itemName = todoListInput.value

    todoListInput.value = ''

    if(!itemName){
        alert('請輸入今日任務事項')
        return
    }

    const todoListItem = document.createElement('li')

    todoListItem.className = 'todo-list_item'

    const todoListItemName = document.createElement('input')

    todoListItemName.className = 'item-name'
    todoListItemName.setAttribute('readonly','readonly')

    todoListItemName.value = `${itemName}`

    const todoListItemBtnContainer = document.createElement('div')
    const editItemBtn = document.createElement('button')

    editItemBtn.className = 'edit-item'
    editItemBtn.innerText = '檢視'

    const removeItemBtn = document.createElement('button')

    removeItemBtn.className = 'remove-item'
    removeItemBtn.innerText = '刪詞'

    todoListItemBtnContainer.appendChild(editItemBtn)
    todoListItemBtnContainer.appendChild(removeItemBtn)

    todoListItem.appendChild(todoListItemName)
    todoListItem.appendChild(todoListItemBtnContainer)

    todoListItems.appendChild(todoListItem)

    editItemBtn.addEventListener('click',() => {
        if(editItemBtn.innerText === '檢視'){
            editItemBtn.innerText = '保存'
            todoListItemName.removeAttribute('readonly')
        }
        else if (todoListItemName.value === ''){
            alert ('清單名稱不能為空')
        }
        else {
            todoListItemName.setAttribute('readonly','readonly')
            editItemBtn.innerText = '檢視'
        }
    })

    removeItemBtn.addEventListener('click',()=>{
        todoListItems.removeChild(todoListItem)
    })
})

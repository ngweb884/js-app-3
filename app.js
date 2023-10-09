let addtodoBtn = document.getElementById('addtodo');
let todolist = document.getElementById('todolist');
let inputfield = document.getElementById('inputfield');

addtodoBtn.addEventListener('click',function() {
    var paragraph = document.createElement('p')
    var buttondel = document.createElement('button')

    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value

    buttondel.innerText = 'Done'
    todolist.appendChild(paragraph)
    todolist.appendChild(buttondel)
    inputfield.value = ''

    paragraph.addEventListener('click',function() {
        paragraph.style.textDecoration = 'line-through'
    })

    buttondel.addEventListener('dblclick',function() {
        todolist.removeChild(paragraph)
        todolist.removeChild(buttondel)
    })
})

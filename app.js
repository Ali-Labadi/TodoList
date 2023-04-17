// code chunk 1 -> current date format in h1:
const h1 = document.querySelector(".date")
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const currentDate = `Date: ${day} / ${month} / ${year}`

h1.innerHTML = currentDate

// code chunk 2 -> pushing input value into ul element:
const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector(".add-btn")
const ul = document.querySelector("ul")

todoObjs = {}

addBtn.addEventListener("click", function() {
    const todoInputValue = todoInput.value
    const nextKey = Object.keys(todoObjs).length + 1 // generate next key
    todoObjs[nextKey] = todoInputValue // add new key-value pair to object
    console.log(todoObjs) // log updated object to console
    todoInput.value = "" // clear the input after adding
    appendTodoObjsToUl() // showing todo items in html with function
})

function appendTodoObjsToUl() {
    ul.innerHTML = "" // clearing html before adding to the list
    for (let key in todoObjs) { // showing the todoObjs in html
        const li = document.createElement('li')
        li.append(todoObjs[key])
        ul.append(li)
    }
}
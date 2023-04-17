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

addBtn.addEventListener("click", () => {
    addItem()
    showItems()
})

function addItem() {
    const todoInputValue = todoInput.value
    const timestamp = Date.now() // generate unique timestamp
    todoObjs[timestamp] = todoInputValue // use timestamp as key in object
    todoInput.value = "" // clear the input after adding
}

function showItems() {
    ul.innerHTML = "" // clearing html before showing the list
    const keys = Object.keys(todoObjs); // get the object's keys
    for (let i = 0; i < keys.length; i++) { // iterate over the keys
        const key = keys[i]
        const li = document.createElement('li')
        li.innerHTML = `${todoObjs[key]} <button class="delete-btn"><span class="material-symbols-outlined">
        delete
        </span></button>`
        ul.append(li)
        li.querySelector(".delete-btn").addEventListener("click", () => {
            delete todoObjs[key] // delete the object key-value pair
            showItems() // refresh the todo items in html
        })
    }
}
const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector(".add-btn")
const taskLi = document.createElement("li")
const ul = document.querySelector("ul")

addBtn.addEventListener('click', ()=>{
    taskLi.append(todoInput.value)
    ul.append(taskLi)
    todoInput.value = ""
})
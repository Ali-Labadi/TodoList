const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector(".add-btn")
const ul = document.querySelector("ul")

addBtn.addEventListener('click', () => {
    const taskLi = document.createElement("li")
    taskLi.append(todoInput.value)
    ul.append(taskLi)
    todoInput.value = ""
})
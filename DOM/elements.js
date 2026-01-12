const todo = document.querySelector(".list-group-item")
const todoList = document.querySelector(".list-group")

const card = document.querySelector(".card")

const rows = document.querySelector(".row")

let value;

// value = todoList;
// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[3];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[3].textContent = "Degisti"
// value = Array.from(todoList.children)

// value.forEach(function(todo){
//     console.log(todo)
// })

//value = todo
//!Ebeveyne geçme
// value = todo.parentElement;

//?Kardeşler arası gezinme
value = todo.nextElementSibling
value = todo.nextElementSibling.previousElementSibling

value = rows.children[0].children[3].children[2].children[2];
value.textContent = "Merhaba Aksaray"
value.style.color = "white"
value.style.backgroundColor = "purple"
value.style.padding = "auto"
value.style.lineHeight = "10px"




console.log(value)
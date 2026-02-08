// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false


const loadToDo=()=>{
    const url="https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayTodo(data)
    })
}
const displayTodo=(todos)=>{
    const todoContainer=document.getElementById("todo-container");
    todoContainer.innerHTML="";

    todos.forEach(todo => {
        const todoCard=document.createElement("div");
        todoCard.innerHTML=`
            <div class="todo-card">
                <p>${todo.completed== true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
                <h1>${todo.title}</h1>
            </div>
        `
        todoContainer.append(todoCard)
    });
}


loadToDo()


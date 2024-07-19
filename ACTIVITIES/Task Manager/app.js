//Step 1: accessing /DOM Targetting
const todoInput = document.getElementsByClassName("todo-input")
const todoButton = document.querySelector(".todo-button")
const filterTodo = document.querySelector(".filter-todo")
const todoList = document.querySelector(".todo-list")


//Step 2: Handling Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

//Step 3: Create the functionality

function addTodo(e){
    // it will stop the page refresh to prevent the default behavior of the page
    e.preventDefault();

    // create element
const todoDiv = document.createElement("div")
todoDiv.classList.add("todo");

// add task/todo
const newTodo = document.createElement("li")
newTodo.innerText = todoInput.value;

newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
todoInput.value = "";

// create complete button
const completeButton = document.createElement("button");completeButton.innerHTML = "<i class='fas fa-check'></i>";
completeButton.classList.add("complete-btn");
todoDiv.appendChild(completeButton);

// create trash button
const trashButton = document.createElement("button");trashButton.innerHTML = "<i class='fas fa-trash'></i>";
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

// append todo list to website
todoList.appendChild(todoDiv);

}

function deleteOrCompleteTodo(e){
    const item = e.target;

    if(item.classList[0] == "trarsh-btn"){
        const todo = item.parentElement
        todo.classList.add("fall")

        // transitionend
        

    todo.addEventListener("transitionend", function() {
        todo.remove()
       })
      }
      if (item.classList[0] === "complete-btn") {
       const todo = item.parentElement
       // add if not existing, remove if existing
       todo.classList.toggle("completed")
      }
}

function filterTodo(e){
    const todos = todoList.childNodes;

    todos.forEach(function (todo){
        switch(e.target.value){
           case "all":
            todo.style.display = "flex";
            break;
           case "completed":
            if (todo.classList.contains("completed")){
                todo.style.display = "flex"
            }else{
                todo.style.display = "none"
            }    
            break;
            case "uncompleted":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }    
                break;
            } 
        
    })
}
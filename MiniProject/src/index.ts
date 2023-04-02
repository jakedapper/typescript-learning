interface Todo {
    text: string;
    completed: boolean;
}


const btn = document.getElementById("btn")! as HTMLButtonElement;
// adding ! at the end tells typescript we KNOW that this DOM element exists, aka it's not null

const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")! as HTMLFormElement;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo)

function readTodos(): Todo[]{
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON === null) return [];
    return JSON.parse(todosJSON)
}

// btn.addEventListener("click", function (){
//     alert(input.value);
//     input.value = "";
//     console.log("hey")
// })

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    }
    createTodo(newTodo);
    todos.push(newTodo);
    
    saveTodos()
    input.value = ""
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function createTodo (todo: Todo){
    const newLI = document.createElement("LI")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    checkbox.addEventListener("change", function(){
        todo.completed = checkbox.checked
        saveTodos();
    })
    newLI.append(todo.text)
    newLI.append(checkbox)
    list.append(newLI)
}

form.addEventListener("submit", handleSubmit)

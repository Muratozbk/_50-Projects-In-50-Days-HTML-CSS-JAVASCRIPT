// Define the Model
class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodoById(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleTodoById(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
    }

    getTodos() {
        return this.todos;
    }
}

// Define the View
class View {
    constructor() {
        this.todoList = document.querySelector("#todo-list");
        this.form = document.querySelector("#todo-form");
        this.input = document.querySelector("#todo-input");
        this.submitButton = document.querySelector("#todo-submit");
    }

    bindAddTodo(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            if (this.input.value) {
                handler(this.input.value);
                this.input.value = "";
            }
        });
    }

    bindRemoveTodo(handler) {
        this.todoList.addEventListener("click", event => {
            if (event.target.dataset.action === "remove") {
                handler(parseInt(event.target.dataset.id));
            }
        });
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener("click", event => {
            if (event.target.dataset.action === "toggle") {
                handler(parseInt(event.target.dataset.id));
            }
        });
    }

    render(todos) {
        this.todoList.innerHTML = "";

        todos.forEach(todo => {
            const li = document.createElement("li");
            li.textContent = todo.text;
            li.dataset.id = todo.id;
            li.style.textDecoration = todo.completed ? "line-through" : "none";

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.dataset.action = "remove";
            removeButton.dataset.id = todo.id;

            const toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle";
            toggleButton.dataset.action = "toggle";
            toggleButton.dataset.id = todo.id;

            li.appendChild(removeButton);
            li.appendChild(toggleButton);
            this.todoList.appendChild(li);
        });
    }
}

// Define the Controller
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindRemoveTodo(this.handleRemoveTodo.bind(this));
        this.view.bindToggleTodo(this.handleToggleTodo.bind(this));

        this.view.render(this.model.getTodos());
    }

    handleAddTodo(todoText) {
        const id = Date.now();
        const todo = { id, text: todoText, completed: false };
        this.model.addTodo(todo);
        this.view.render(this.model.getTodos());
    }

    handleRemoveTodo(id) {
        this.model.removeTodoById(id);
        this.view.render(this.model.getTodos());
    }

    handleToggleTodo(id) {
        this.model.toggleTodoById(id);
        this.view.render(this.model.getTodos());
    }
}

// Initialize the application
const model = new Model();
const view = new View();
const controller = new Controller(model, view);
/*
In this example, we define the Model as a class with methods for adding, removing, and toggling todos. We define the View as a class with methods for binding event handlers, rendering the todo list in the DOM, and updating the styles of the todo items based on their completion status. We define the Controller as
*/
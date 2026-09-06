interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
  
async function getCompletedTodos(): Promise<Todo[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await response.json();
    return todos.filter((todo) => todo.completed);
}

getCompletedTodos().then(data => console.log(data))
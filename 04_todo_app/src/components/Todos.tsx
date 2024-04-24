import { UseTodos } from "@/context/todos";


const Todos = () => {
  const { todos, toggleComplete, deleteTodo } = UseTodos();
    let filterTodo = todos;
    
  return (
    <ul>
      {filterTodo.map((todo: any) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => {
                console.log(todo.completed);
                toggleComplete(todo.id);
              }}
            />
            <label htmlFor="{`todo-${todo.id}`}">{todo.task}</label>

            {todo.completed && (
              <button type="button" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;

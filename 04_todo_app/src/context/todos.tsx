  "use client";
  import { Children, createContext, useContext, useState } from "react";

  type Todo = {
    id: string;
    task: string;
    completed: boolean;
    created: Date;
  };

  type Context = {
    todos: Todo[];
    addTodo: (task: string) => void;
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
  };

  // Creating context
  export const TodoContext = createContext<Context | null>(null);

  // Creating Provider
  export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    // Hamare jo todos he wo ak basically wo sare ak array mn store ho rhe hn and unka UI bhi change ho rha he to ye krne ke liye han useState use kre ge
    const [todos, setTodos] = useState<Todo[]>([]);

    // Is function se hamare todo mn data add hoga
    function addTodo(task: string) {
      // Is addTodo mn jo bhi data aye wo hamare useState mn store ho jaye uske liye ham setTodos call krke uske andar apne functionality add kre ge

      // setTodo ke parameter mn prev mn hamare sare todos ka data a jayega
      setTodos((prev) => {
        // ak variable bnaye ge jis mn hamare new todo add hoga
        const newTodo: Todo[] = [
          {
            id: Math.random().toString(),
            task,
            completed: false,
            created: new Date(),
          },
          // jab hamare new todo add hoga to bake sare todo niche a jayege our new todo top pr a jayega
          ...prev,
        ];
        return newTodo;
      });
    }

    // Is function mn ham Toggle ke functionality likhe ge
    function toggleComplete(id: string) {
      // Kyu ke isko ham ne apne todos mn store krna he to ham setTodo call kre ge and usko andar functionality likhe ge
      // SetTodo ke callback mn jo prev he usmn hamare sare previous data a jayega
      setTodos((prev) => {
        // Ak variable bnaya and then apne sare previous data pr loop chala
        const newTodo = prev.map((task) => {
          // Ak condition lagaye jis mn ham ne bola agr us todo ke task ke id (task.id) equal ho id ke to completed ke value ko reverse kr do agr ture he to false and false he to true
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        return newTodo;
      });
    }

    // Is function mn ham Delete Todo ke functionality likhe ge
    function deleteTodo(id: string) {
      // Kyu ke isko ham ne apne todos mn store krna he to ham setTodo call kre ge and usko andar functionality likhe ge
      // SetTodo ke callback mn jo prev he usmn hamare sare previous data a jayega
      setTodos((prev) => {
        const newTodo = prev.filter((task) => task.id !== id);
        return newTodo;
      });
    }

    return (
      <TodoContext.Provider
        value={{ todos, addTodo, toggleComplete, deleteTodo }}>
        {children})
      </TodoContext.Provider>
    );
  };

  // Creating Context Api
  export const UseTodos = () => {
    const todosContextValue = useContext(TodoContext);  

    if (!todosContextValue) {
      throw new Error("TodoContext not found");
    }

    return {
      todosContextValue
    };
  };

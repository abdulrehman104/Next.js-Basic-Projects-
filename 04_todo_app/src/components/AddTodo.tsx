"use client";

import { useTodos } from "@/context/todos";
import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { addTodo}:any = useTodos();

  console.log(addTodo)
  // is function mn sab se  phele e.preventdefalut ye kre ga ke buydefalut page ko refresh nhi hone dega, addTodo(todo) basically hamare addtodo mn jo value ayege usko todo mn add kr dega, and settodo is liye empty he ke jab value add hop jayege to hamare input empty ho jayega
  function forSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  }
console.log(forSubmit)
  return (
    //  Ham ne ak form bnaya jis mn hamare pas ak input he our ak button he
    // Jab bhi ye form submit hoga to ak forsubmit function call hoga
    <form onSubmit={forSubmit}>
      <input
        type="text"
        placeholder="Add Your Todo"
        // value={todo}: Sets the current value of the input field to the value of the todo variable. This suggests that todo is a state variable holding the value of the input field.
        value={todo}
        // Jab bhi user input mn koye value write kre ga to wo e.target.value mn a jayege
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    
  );
};
export default AddTodo;

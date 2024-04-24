import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

const Page = () => {
  return (
    <div>
      <h1>Todo App Next.js + TypeScript & Talwind</h1>
      {/* <Navbar/> */}
      <AddTodo />
      <Todos/> 
    </div>
  );
};

export default Page;


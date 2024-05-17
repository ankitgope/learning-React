import React,{useState}from "react";
import { useToDo } from "../Contexts/ToDoContext";
function TodoForm() {
  // this a part of add to
  const [todo, setTodo] = useState("");
  // writing the context here from here only we get our context (useTodo-> coustome Hook and addTodo is the functionality)
  const { addTodo } = useToDo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    // check documentation once 
    addTodo({todo,completed:false});
    setTodo("")
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

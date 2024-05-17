import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "1st todo message",
      completed: false, // default value must we can say checked unchecked
    },
  ],
  // now we are writing the functionalities but we not write the defeniation here we write it in App.jsx we just write the name
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const useToDo = () => {
  return useContext(ToDoContext);
};
export const TodoProvider = ToDoContext.Provider;

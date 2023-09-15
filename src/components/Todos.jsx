import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../Redux/features/todo/todoSlice";
import { useDispatch } from "react-redux";

const Todos = () => {
  let todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-6">Todos</div>
      {todos.map((todo) => {
        return (
          <li
            className="mt-2 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="te">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className=" text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <i class="w3-xlarge fa fa-trash"></i>
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Todos;

import { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Read The Docs",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Updated",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Read The Docs",
      isCompleted: false,
    },
  ]);

  const inputRef = useRef();

  //Add New Task
  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    inputRef.current.value = "";
  };

  //Update task status

  return (
    <>
      <div className="w-[30rem] ">
        <h1 className="text-lg my-2 font-medium text-amber-500">To Do list </h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              ref={inputRef}
              type="text"
              name=""
              id=""
              placeholder="Add Your task"
              className="py-3 px-4 w-full rounded text-sm font-medium border-none focus:outline-none focus:border-amber-300-400"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-700 text-sm font-medium border-none transition"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <p className="my-3 text-sm text-zinc-400">Fill Task Details </p>
        <div className="w-[30rem] bg-white shadow py-6 px-4 rounded">
          <fieldset className="my-4">
            <legend className=" font-medium text-pink-600">List of Task</legend>
          </fieldset>
          {todoList.length === 0 ? (
            <p className="text-sm text-gray-500">ToDo List is empty</p>
          ) : (
            todoList.map((todo) => (
              <ToDoItem
                key={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
                id={todo.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ToDo;

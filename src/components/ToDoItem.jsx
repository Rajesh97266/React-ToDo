import React from "react";

const ToDoItem = ({ text, isCompleted , id }) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <label
        className={`hover:bg-slate-100 flex-1 p-2 rounded-md  cursor-pointer select-none ${isCompleted && "line-through text-slate-600"}`}
      >
        {text}
      </label>
      <div className="size-[25px]  hover:bg-slate-100 rounded-md">
        <svg
          className="hover:fill-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#DA498D"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
    </div>
  );
};

export default ToDoItem;

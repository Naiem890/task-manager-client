import React, { useState } from "react";
import { EyeIcon, TrashIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
const Task = ({ task, setTaskDetails }) => {
  const { taskName } = task;
  const [checked, setChecked] = useState(false);

  const handleDelete = (id) => {
    console.log(id);
    const isConfirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirm) {
      fetch(`https://infinite-forest-86486.herokuapp.com/task/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          toast.error("Task Deleted");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div
      className={`form-control max-w-md mx-auto mb-3  rounded-xl ${
        checked ? "bg-[#a42c4e7a] line-through opacity-50" : "bg-[#2c4aa49c]"
      }`}
    >
      <div
        className={`  flex items-center justify-start gap-5 border  rounded-xl  px-5 py-5 border-primary  cursor-pointer`}
      >
        <input
          type="checkbox"
          checked={checked}
          className="checkbox "
          onChange={() => setChecked(!checked)}
        />
        <p
          className={`text-left leading-normal font-semibold ${
            checked ? "line-through" : ""
          } font-mono text-xl`}
        >
          {taskName}
        </p>
        <div className="flex gap-5 ml-auto ">
          <label
            htmlFor="task-details-modal"
            onClick={() => setTaskDetails(task)}
            className="cursor-pointer"
          >
            <EyeIcon height={24}></EyeIcon>
          </label>
          <TrashIcon
            height={24}
            className="text-red-500"
            onClick={() => handleDelete(task._id)}
          ></TrashIcon>
        </div>
      </div>
    </div>
  );
};

export default Task;

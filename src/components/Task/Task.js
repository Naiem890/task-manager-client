import React, { useState } from "react";
import { EyeIcon, TrashIcon } from "@heroicons/react/solid";
const Task = () => {
  const [checked, setChecked] = useState(false);
  return (
    //   for non active state => bg-[#3359caad] line-through bg-[#3359ca4a]
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
          Task Name HereTask Task Name HereTask
        </p>
        <div className="flex gap-5 ml-auto ">
          <label htmlFor="task-details-modal" className="cursor-pointer">
            <EyeIcon height={24}></EyeIcon>
          </label>
          <TrashIcon height={24} className="text-red-500"></TrashIcon>
        </div>
      </div>
    </div>
  );
};

export default Task;

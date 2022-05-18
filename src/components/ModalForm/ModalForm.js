import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

const ModalForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const handleAddTask = (data) => {
    const task = {
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      userEmail: user.email,
    };

    fetch("http://localhost:5000/task/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // await console.log(task);
    // reset();
    // document.getElementById("form-modal").checked = false;
  };
  return (
    <div>
      <input type="checkbox" id="form-modal" className="modal-toggle" />
      <label htmlFor="form-modal" className="modal cursor-pointer text-left">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="form-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Task</h3>
          <form
            className="flex flex-col  items-center mt-8"
            onSubmit={handleSubmit(handleAddTask)}
          >
            <input
              type="text"
              placeholder="Add Task"
              {...register("taskName", { required: true })}
              className="input input-bordered  w-full input-primary max-w-md"
            />
            <textarea
              {...register("taskDescription", { required: true })}
              className="textarea textarea-primary max-w-md w-full mt-6"
              placeholder="Task Description"
            ></textarea>
            <button
              for="form-modal"
              type="submit"
              className="btn btn-primary mt-6 max-w-md w-full"
            >
              Done
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default ModalForm;

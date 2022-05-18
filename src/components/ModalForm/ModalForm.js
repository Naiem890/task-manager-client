import React from "react";

const ModalForm = () => {
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
          <form className="flex flex-col  items-center mt-8">
            <input
              type="text"
              placeholder="Add Task"
              className="input input-bordered  w-full input-primary max-w-md"
            />
            <textarea
              className="textarea textarea-primary max-w-md w-full mt-6"
              placeholder="Task Description"
            ></textarea>
            <button className="btn btn-primary mt-6 max-w-md w-full">
              Done
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default ModalForm;

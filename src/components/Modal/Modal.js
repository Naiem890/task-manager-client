import React from "react";

const Modal = ({ taskDetails }) => {
  const { taskName, taskDescription } = taskDetails;
  // console.log(taskDetails);
  return (
    <div>
      <input type="checkbox" id="task-details-modal" className="modal-toggle" />
      <label htmlFor="task-details-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="task-details-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{taskName}</h3>
          <p className="py-4">{taskDescription}</p>
        </label>
      </label>
    </div>
  );
};

export default Modal;

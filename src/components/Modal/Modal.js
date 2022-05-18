import React from "react";

const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="task-details-modal" class="modal-toggle" />
      <label for="task-details-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="task-details-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default Modal;

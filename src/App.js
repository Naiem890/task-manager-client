import "./App.css";
import Modal from "./components/Modal/Modal";
import ModalForm from "./components/ModalForm/ModalForm";
import Task from "./components/Task/Task";

function App() {
  return (
    <div className="text-center mt-16">
      <label
        htmlFor="form-modal"
        className="btn btn-accent text-lg  mt-6 max-w-md w-full"
      >
        Add Task
      </label>
      {/* Task List */}

      <div className="task_container mt-12">
        <h2 className="text-3xl font-bold mb-8">Your Added Task</h2>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </div>
      <Modal></Modal>
      <ModalForm></ModalForm>
    </div>
  );
}

export default App;

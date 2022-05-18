import { signOut } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import ModalForm from "./components/ModalForm/ModalForm";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Task from "./components/Task/Task";
import auth from "./firebase.init";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/"
        element={
          <RequireAuth>
            <div className="text-center mt-16">
              <button
                onClick={() => signOut(auth)}
                className="btn btn-error btn-outline  absolute right-12 top-12"
              >
                Log Out
              </button>
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
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
}

export default App;

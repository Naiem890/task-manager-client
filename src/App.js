import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import ModalForm from "./components/ModalForm/ModalForm";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Task from "./components/Task/Task";
import auth from "./firebase.init";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading/Loading";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskDetails, setTaskDetails] = useState({});
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch("https://infinite-forest-86486.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => {
        const myTask = data.filter((task) => task.userEmail === user?.email);
        // console.log(myTask);
        return setTasks(myTask);
      });
  }, [tasks, user?.email]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
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
                  <h2 className="text-3xl font-bold mb-8">
                    Your Added Task ({tasks.length})
                  </h2>
                  <div className="">
                    {tasks.map((task) => {
                      return (
                        <Task
                          key={task._id}
                          task={task}
                          setTaskDetails={setTaskDetails}
                        ></Task>
                      );
                    })}
                  </div>
                </div>
                <Modal taskDetails={taskDetails}></Modal>
                <ModalForm></ModalForm>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

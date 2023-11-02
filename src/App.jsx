import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./assets/components/ModalForm";
import Header from "./assets/components/Header";
import axios from "axios";
import UserList from "./assets/components/UserList";

const BASE_URL = "https://users-crud-dev-rmeq.3.us-1.fl0.io";

const DEFAULT_VALUES = {
  birthday: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeShowModal = () => setIsShowModal(!isShowModal);

  const getAllUsers = () => {
    const url = BASE_URL + "/users/";

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const createUser = (data, reset) => {
    const url = BASE_URL + "/users/";

    axios
      .post(url, data)
      .then(({ data }) => {
        getAllUsers();
        resetModalForm(reset);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`;

    axios
      .delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`;

    axios
      .put(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
      })
      .catch((err) => console.log(err));
  };

  const resetModalForm = (reset) => {
    setIsShowModal(false);
    reset(DEFAULT_VALUES);
    setIsUserToUpdate(null);
  };

  return (
    <>
      <main
        className={`font-["Roboto"] min-h-screen relative ${
          isDarkMode ? "whiteMode" : "darkMode bg-zinc-900"
        }`}
      >
        <Header changeShowModal={changeShowModal} isDarkMode={isDarkMode} />

        <ModalForm
          isShowModal={isShowModal}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          resetModalForm={resetModalForm}
          isDarkMode={isDarkMode}
        />

        <UserList
          users={users}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
          isDarkMode={isDarkMode}
        />
        <button
          className={`fixed ${
            isDarkMode ? "text-yellow-400" : " text-blue-400"
          } max-[640px]:right-2 right-4 bottom-2 text-4xl`}
          onClick={setIsDarkMode(!isDarkMode)}
        >
          <i
            className={`icon-transition bx ${
              isDarkMode ? "bxs-sun" : "bxs-moon"
            }`}
          ></i>
        </button>
      </main>
    </>
  );
}

export default App;

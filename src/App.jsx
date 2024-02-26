import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import UserList from "./components/UserList";

const BASE_USL = "https://api-crud-1.onrender.com";

const DEFAULT_VALUES = {
  birthday: "",
  firt_name: "",
  last_name: "",
  email: "",
  password: "",
};

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [users, setUsers] = useState([]);

  const changeModalShowing = () => setIsModalShowing(!isModalShowing);

  const getAllUsers = () => {
    const url = BASE_USL + "/users/";

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (data, reset) => {
    const url = BASE_USL + "/users/";

    axios
      .post(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const url = BASE_USL + `/users/${id}/`;

    axios
      .delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data, reset) => {
    const url = BASE_USL + `/users/${isUserToUpdate.id}/`;

    axios
      .patch(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
      })
      .catch((err) => console.log(err));
  };

  const resetModalForm = (reset) => {
    setIsModalShowing(false);
    reset(DEFAULT_VALUES);
    setIsUserToUpdate(null);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className='font-["Roboto"]'>
      <Header changeModalShowing={changeModalShowing} />

      <ModalForm
        changeModalShowing={changeModalShowing}
        isModalShowing={isModalShowing}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetModalForm={resetModalForm}
        createUser={createUser}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        changeModalShowing={changeModalShowing}
        setIsUserToUpdate={setIsUserToUpdate}
      />
    </main>
  );
}

export default App;

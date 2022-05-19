import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/UsersReducers";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  console.log(userList[4].id);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const randomId = new Date();
  console.log(randomId);

  return (
    <div className="App">
      <form className="addUser" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: userName,
              })
            );
          }}
        >
          Add User
        </button>
      </form>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <h2>{user.username}</h2>
              <input
                type="text"
                placeholder="edit username..."
                onChange={(e) => setNewUserName(e.target.value)}
              />
              <button
                onClick={() => dispatch(updateUser({ username: newUserName }))}
              >
                Edit Username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

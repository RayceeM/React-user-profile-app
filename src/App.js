import './App.css';
import React, { useState } from "react";
import SiteHeadingCard from "./components/SiteLayoutHeader/siteLayoutHeader";

function App() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(5);

  async function fetchUsers() {
    const UsersResponse = await fetch(
      "https://62d85cba9c8b5185c787f36b.mockapi.io/api/v1/users/"
    );
    const users = await UsersResponse.json();
    setUsers(users.slice(0, userCount));
  }

  fetchUsers();

  function paginateUsers() {
    setUserCount(userCount + 5);
  }
  return (
    <div className="App">
      <SiteHeadingCard />
      <table>
        <tbody>
          <tr>
            <th> Name </th>
            <th> Email</th>
            <th> Registration date </th>
          </tr>
          {users.map((user) => (
            <tr key={user.id} className="User">
              <td className="Username"> {user.username} </td>
              <td>{user.email}</td>
              <td id="CreatedAt"> {user.created_at} </td>
              <td>
                <button> show profile </button>
              </td>
            </tr>
          ))}
          <button onClick={paginateUsers}> show more </button>
        </tbody>
      </table>
    </div>
  );
}

export default App;

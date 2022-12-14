import "./App.css";
import { SiteHeadingCard } from "./components/SiteLayoutHeader/SiteLayoutHeader";
import { UserTable } from "./components/UserTable/UserTable";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const UsersResponse = await fetch(
          "https://62d85cba9c8b5185c787f36b.mockapi.io/api/v1/users/"
        );
        const users = await UsersResponse.json();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    run();
  }, []);

  return (
    <div className="App">
      <SiteHeadingCard />
      <h2>Users</h2>
      <UserTable users={users} />
    </div>
  );
}

export default App;

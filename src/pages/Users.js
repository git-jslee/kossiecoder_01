import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spiner from "../components/Spiner";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <h1>Users</h1>
      {loading ? <Spiner /> : <UserList users={users} />}
    </>
  );
}

export default Users;

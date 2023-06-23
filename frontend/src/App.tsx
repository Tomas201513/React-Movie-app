import { useState, useEffect } from "react";
import "./App.css";
import UserService, { User } from "./service/user-service";
import { CanceledError } from "axios";
import useUsers from "./hooks/useUsers";

function App() {
  const { data, error, loading } = useUsers();
  if (loading) return <p>loading</p>;
  return (
    <>
      {data && JSON.stringify(data)}
      <br />
      <br />
      <br />
      {error && JSON.stringify(error)}
    </>
  );
}

export default App;

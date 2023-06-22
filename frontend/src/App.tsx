import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
interface User {
  id: number;
  name: string;
}
function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data[0].name))
      .catch((err) => {
        setError(err);
      });
  }, []);
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

import { useQuery } from "@tanstack/react-query";
import "./App.css";
// import useUsers from "./hooks/useUsers";
// import useTodo from "./hooks/useTodo";
import axios from "axios";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
function App() {
  // const { data, error, loading } = useUsers();
  // if (loading) return <p>loading</p>;
  // const { data } = useTodo();

  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.data;
        console.log(res.data);
      });

  const { data: todo, error } = useQuery<Todo[], Error>({
    queryKey: ["todo"],
    queryFn: fetchTodos,
  });
  return (
    <>
      {/* {todo && JSON.stringify("x", todo)} */}
      {JSON.stringify(todo)}
      {/* {data && JSON.stringify(data)}
      <br />
      <br />
      <br />
      {error && JSON.stringify(error)} */}
    </>
  );
}

export default App;

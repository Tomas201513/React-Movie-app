import axios from "axios";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"

interface Todo {
    id: number;
    title: string;
  }
const useTodo = () => {
    // const [data, setData] = useState<Todo[]>();
    // useEffect(() => {
    //   axios
    //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    //     .then((res) => {
    //       setData(res.data);
    //     });
    // }, []);

    const fetchTodos=()=>{
        axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then(res => 
          res.data);
    }
    const {data}=useQuery({
        queryKey: ['todo'],
        queryFn: fetchTodos
        
    })

    return{data}
}

export default useTodo
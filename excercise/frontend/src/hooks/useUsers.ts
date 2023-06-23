import { useEffect, useState } from "react";
import UserService, { User } from "../service/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
    const [data, setData] = useState<User[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      const { request, cancel } = UserService.getAll<User>();
  
      request
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setLoading(false);
          setError(err);
        });
  
      return () => cancel();
    }, []);

    return {data,error,loading};
}

export default useUsers
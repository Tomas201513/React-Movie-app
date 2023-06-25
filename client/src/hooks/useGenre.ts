import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


export interface Genre {
    id: number;
    name: string;
   

  }
 export interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }

const useGenre = () => {
    const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const controller= new AbortController()
    apiClient
      .get<FetchGenreResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        console.log("game data", res.data);
        setGenre(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
          if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
      return ()=> controller.abort()
  }, []);

  return {genre,error,loading}

}

export default useGenre
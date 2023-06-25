import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface platform{
  id: number;
  name: string;
  slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms: {platform:platform}[]
    metacritic: number

  }
 export interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const controller= new AbortController()
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        console.log("game data", res.data);
        setGames(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
          if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
      return ()=> controller.abort()
  }, []);

  return {games,error,loading}

}

export default useGames
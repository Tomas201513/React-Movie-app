import { GameQuery } from '../App';
import useData from './useData';

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

const useGames = (gameQuery:GameQuery) => useData<Game>('/games', 
{params:{genres: gameQuery.genre?.id, 
  platforms:gameQuery.platform?.id, 
  ordering: gameQuery.sortOrders,
  search:gameQuery?.searchText}},
[gameQuery])

export default useGames
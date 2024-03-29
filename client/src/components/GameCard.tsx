import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCropedImageUrl } from "../services/image-url";
import Emoji from "./Emoji";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image borderRadius={5} src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            key={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} marginTop={3}>
          {game.name}
        </Heading>
        <Emoji rate={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;

    /*<Card>
      <Image borderRadius={5} src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            key={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} marginTop={3}>
          {game.name}
        </Heading>
        <Emoji rate={game.rating_top} />
      </CardBody>
    </Card>*/

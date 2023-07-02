import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <>
      <Heading as="h1" paddingY={5}>
        {gameQuery?.genre?.name || ""}
        {gameQuery?.platform?.name || ""} Game
      </Heading>
    </>
  );
};

export default GameHeading;

import { Image, ImageProps } from "@chakra-ui/react";
import Bullseye from "../assets/icons8-bullseye-48.png";
import ThunbsUp from "../assets/icons8-thumbs-up-48.png";
import Meh from "../assets/icons8-meh-48 (1).png";

interface Props {
  rate: number;
}
const Emoji = ({ rate }: Props) => {
  if (rate < 3) return "";
  const emoiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh" },
    4: { src: ThunbsUp, alt: "recommended" },
    5: { src: Bullseye, alt: "excptional" },
  };
  return (
    <>
      <Image {...emoiMap[rate]} boxSize={"25px"} marginTop={1} />
    </>
  );
};

export default Emoji;

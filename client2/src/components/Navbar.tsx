import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Image marginLeft={4} src={logo} boxSize={"60px"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;

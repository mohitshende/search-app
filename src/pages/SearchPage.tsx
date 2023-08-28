import { Flex, Image } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import Logo from "/src/assets/logo.svg";
import BackgroundImage from "/src/assets/bgImage.jpeg";

function SearchPage() {
  return (
    <Flex
      height={"100vh"}
      bgImage={BackgroundImage}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      padding={"40px"}
      direction={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Flex width={"100%"} justifyContent={"flex-end"}>
        <Image height={"45px"} src={Logo} alt="logo" />
      </Flex>
      <SearchBar />
    </Flex>
  );
}

export default SearchPage;

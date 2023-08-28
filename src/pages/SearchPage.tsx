import { Flex, Image } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";

function SearchPage() {
  return (
    <Flex
      height={"100vh"}
      bgImage={"src/assets/bgImage.jpeg"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      padding={"40px"}
      direction={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Flex width={"100%"} justifyContent={"flex-end"}>
        <Image height={"45px"} src={"/src/assets/logo.svg"} alt="logo" />
      </Flex>
      <SearchBar />
    </Flex>
  );
}

export default SearchPage;

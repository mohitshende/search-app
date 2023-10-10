import { Flex, Image } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import Products from "../components/Products";
import useGetData from "../hooks/useGetData";
import { IProduct } from "../components/SuggestionBox";
import Filters from "../components/Filters";
import { useState } from "react";
import Logo from "/src/assets/logo.svg";
import { useNavigate } from "react-router-dom";

export interface IFilters {
  brands: (string | number)[];
  priceRange: (string | number)[];
  rating: (string | number)[];
}

function SearchResultsPage() {
  const {
    data: products,
    isLoading,
  }: { data: IProduct[]; isLoading: boolean } = useGetData(
    `https://dummyjson.com/products/`
  );

  const [filters, setFilters] = useState<IFilters>({
    brands: [],
    priceRange: [],
    rating: [],
  });
  const navigate = useNavigate();

  return (
    <Flex height={"100vh"} padding={"40px"} direction={"column"} gap={"48px"}>
      <Flex width={"100%"} justifyContent={"space-around"} gap={"20px"}>
        <SearchBar border={"1px solid black"} borderRadius={"13px"} />
        <Image
          height={"44px"}
          src={Logo}
          alt="logo"
          cursor={"pointer"}
          onClick={() => navigate("/")}
        />
      </Flex>
      <Flex
        width={"100%"}
        gap={"50px"}
        direction={{ base: "column", md: "unset" }}
      >
        <Filters filters={filters} setFilters={setFilters} />
        <Products filters={filters} products={products} isLoading={isLoading} />
      </Flex>
    </Flex>
  );
}

export default SearchResultsPage;

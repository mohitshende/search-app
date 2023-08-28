import { Flex, Spinner, Text } from "@chakra-ui/react";
import { IProduct } from "./SuggestionBox";
import Product from "./Product";
import { filterProducts } from "../utils/filterProducts";
import { IFilters } from "../pages/SearchResultsPage";

function Products({
  filters,
  products,
  isLoading,
}: {
  filters: IFilters;
  products: IProduct[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <Flex
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"82px"}
      >
        <Spinner />
      </Flex>
    );
  }
  const filteredProducts = filterProducts(products, filters);

  if (filteredProducts.length == 0) {
    return (
      <Flex
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"82px"}
      >
        <Text fontWeight={"400"} fontSize={"20px"}>
          No Products found matching the search criteria
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      wrap={"wrap"}
      gap={"40px"}
      justifyContent={"center"}
      marginTop={"85px"}
    >
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Flex>
  );
}

export default Products;

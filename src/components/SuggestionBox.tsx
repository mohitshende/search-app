import { Flex, Text, Image, Spinner } from "@chakra-ui/react";
import useGetData from "../hooks/useGetData";

export interface IProduct {
  rating: number;
  title: string;
  id: string;
  image: string;
  price: number;
  thumbnail: string;
  brand: string;
}

function SuggestionBox() {
  const {
    data: products,
    isLoading,
  }: { data: IProduct[]; isLoading: boolean } = useGetData(
    `https://dummyjson.com/products/`
  );

  if (isLoading) {
    return (
      <Flex
        bgColor={"white"}
        boxShadow={"0px 4px 40px 0px rgba(0, 0, 0, 0.25)"}
        borderRadius={"4px"}
        padding={"40px"}
        direction={"column"}
        transition={"all 200ms ease-in-out 0.25s"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        zIndex={"1"}
        width={"70vw"}
        top={"110%"}
      >
        <Spinner size={"lg"} />
      </Flex>
    );
  }

  return (
    <Flex
      width={{ base: "100%", md: "70vw" }}
      bgColor={"white"}
      boxShadow={"0px 4px 40px 0px rgba(0, 0, 0, 0.25)"}
      borderRadius={"4px"}
      padding={"40px"}
      direction={"column"}
      transition={"all 200ms ease-in-out 0.25s"}
      position={"absolute"}
      zIndex={"1"}
      top={"110%"}
      maxHeight={{ base: "500px", md: "unset" }}
      overflow={"scroll"}
    >
      <Text fontWeight={"500"} fontSize={"21px"} marginBottom={"24px"}>
        Latest Trends
      </Text>
      <Flex width={"100%"} gap={"30px"} wrap={{ base: "wrap", md: "unset" }}>
        {products.slice(0, 5).map((product) => (
          <Flex
            key={product.id}
            borderRadius={"4px"}
            direction={"column"}
            height={"254px"}
            justifyContent={"space-between"}
            width={"165px"}
          >
            <Image
              src={product.thumbnail}
              alt={"product"}
              objectFit={"cover"}
              width={"100%"}
              height={"223px"}
            />
            <Text
              width={"100%"}
              fontWeight={"300"}
              fontSize={"14px"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
            >
              {product.title}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex direction={"column"} gap={"24px"} marginTop={"40px"}>
        <Text fontWeight={"500"} fontSize={"21px"}>
          Popular suggestions
        </Text>

        <Flex direction={"column"} width={"100%"} gap={"12px"}>
          {products.slice(0, 5).map((product) => (
            <Text key={product.id} fontWeight={"400"} fontSize={"16px"}>
              {product.title}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SuggestionBox;

import { Flex, Text } from "@chakra-ui/react";
import { IProduct } from "./SuggestionBox";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import StarRating from "./StarRating";

function Product({ product }: { product: IProduct }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Flex
      key={product.id}
      direction={"column"}
      justifyContent={"space-between"}
      width={"239px"}
      maxHeight={"450px"}
      borderRadius={"4px"}
      overflow={"hidden"}
    >
      <Flex
        direction={"column"}
        bgImage={product.thumbnail}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        width={"100%"}
        height={"325px"}
        justifyContent={"space-between"}
        role="group"
      >
        <Flex
          padding={"16px"}
          alignSelf={"flex-end"}
          height={"32px"}
          onClick={() => setIsFavorite(!isFavorite)}
          cursor={"pointer"}
        >
          {isFavorite ? (
            <AiFillHeart size={"32px"} color={"red"} />
          ) : (
            <AiOutlineHeart size={"32px"} color={"white"} />
          )}
        </Flex>

        <Flex
          width={"100%"}
          display={"none"}
          bgColor={"rgba(109, 132, 255, 0.71)"}
          cursor={"pointer"}
          paddingY={"12px"}
          _groupHover={{ display: "flex" }}
        >
          <Text
            width={"100%"}
            fontWeight={"500"}
            fontSize={"20px"}
            color={"white"}
            textAlign={"center"}
          >
            View Product
          </Text>
        </Flex>
      </Flex>
      <Text
        width={"100%"}
        fontWeight={"400"}
        fontSize={"20px"}
        textOverflow={"ellipsis"}
        overflow={"hidden"}
        whiteSpace={"nowrap"}
      >
        {product.title}
      </Text>
      <Text
        width={"100%"}
        fontWeight={"600"}
        fontSize={"20px"}
        color={"#6D84FF"}
      >
        ${product.price}
      </Text>
      <StarRating rating={product.rating} />
    </Flex>
  );
}

export default Product;

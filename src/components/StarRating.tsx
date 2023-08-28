import { Flex } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

function StarRating({ rating }: { rating: number }) {
  const totalStars = Math.round(rating);

  return (
    <Flex>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index + 1 <= totalStars) {
          return <AiFillStar key={index} color={"#FDD33D"} />;
        }
        return <AiFillStar key={index} color={"#CDCCC8"} />;
      })}
    </Flex>
  );
}

export default StarRating;

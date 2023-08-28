import {
  ChakraProps,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SuggestionBox from "./SuggestionBox";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar(props: ChakraProps) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get("query") || "");
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] =
    useState<boolean>(false);

  const navigate = useNavigate();

  function redirectToSearchResultsPage() {
    navigate(`/search?query=${search}`);
  }

  return (
    <Flex
      minWidth={"70vw"}
      direction={"column"}
      gap={"17px"}
      position={"relative"}
    >
      <Flex
        height={"100%"}
        width={"100%"}
        backgroundColor={"white"}
        borderRadius={"20px"}
        overflow={"hidden"}
        transition={"all 200ms ease-in-out 0.25s"}
        {...props}
      >
        <InputGroup _focus={{}} _active={{}} _focusVisible={{}}>
          <Input
            outline={"none"}
            border={"none"}
            placeholder="Search"
            _focus={{}}
            _active={{}}
            _focusVisible={{}}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => {
              setIsSuggestionBoxOpen(true);
            }}
            onBlur={() => {
              setIsSuggestionBoxOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                redirectToSearchResultsPage();
              }
            }}
          />
          <InputRightElement
            onClick={() => {
              if (search.length > 0) {
                redirectToSearchResultsPage();
              }
            }}
            cursor={search.length > 0 ? "pointer" : "not-allowed"}
          >
            <LuSearch />
          </InputRightElement>
        </InputGroup>
      </Flex>
      {isSuggestionBoxOpen && <SuggestionBox />}
    </Flex>
  );
}

export default SearchBar;

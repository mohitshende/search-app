import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Text,
} from "@chakra-ui/react";
import StarRating from "./StarRating";
import { IFilters } from "../pages/SearchResultsPage";

function Filters({
  filters,
  setFilters,
}: {
  filters: IFilters;
  setFilters: (filters: IFilters) => void;
}) {
  const brands: string[] = ["Apple", "Samsung"];

  return (
    <Flex direction={"column"} minWidth={"281px"} gridGap={"40px"}>
      <Text fontWeight={"400"} fontSize={"40px"}>
        Search Results
      </Text>
      <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={"20px"}
              fontWeight={"500"}
            >
              BRAND
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <CheckboxGroup
              onChange={(values) => {
                setFilters({ ...filters, brands: values });
              }}
            >
              <Flex direction={"column"}>
                {brands.map((brand) => (
                  <Checkbox key={brand} value={brand}>
                    <Text fontWeight={"300"} fontSize={"16px"}>
                      {brand}
                    </Text>
                  </Checkbox>
                ))}
              </Flex>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={"20px"}
              fontWeight={"500"}
            >
              PRICE RANGE
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <CheckboxGroup
              onChange={(values) => {
                setFilters({ ...filters, priceRange: values });
              }}
            >
              <Flex direction={"column"}>
                <Checkbox value={"500"}>
                  <Text fontWeight={"300"} fontSize={"16px"}>
                    Under 500
                  </Text>
                </Checkbox>
                <Checkbox value={"3000"}>
                  <Text fontWeight={"300"} fontSize={"16px"}>
                    Under 3000
                  </Text>
                </Checkbox>
              </Flex>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={"20px"}
              fontWeight={"500"}
            >
              RATINGS
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <CheckboxGroup
              onChange={(values) => {
                setFilters({ ...filters, rating: values });
              }}
            >
              <Flex direction={"column"} gap={"16px"}>
                {Array.from({ length: 5 }).map((_, index) => {
                  const currentValue = 5 - index;
                  return (
                    <Checkbox
                      key={currentValue}
                      value={currentValue.toString()}
                    >
                      <StarRating rating={currentValue} />
                    </Checkbox>
                  );
                })}
              </Flex>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default Filters;

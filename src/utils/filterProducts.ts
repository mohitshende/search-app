import { IProduct } from "../components/SuggestionBox";
import { IFilters } from "../pages/SearchResultsPage";

export function filterProducts(products: IProduct[], filters: IFilters) {
  return products.filter((product) => {
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    if (
      filters.priceRange.length > 0 &&
      filters.priceRange.every((price) => product.price > Number(price))
    ) {
      return false;
    }

    if (
      filters.rating.length > 0 &&
      !filters.rating.includes(Math.round(product.rating).toString())
    ) {
      return false;
    }
    return true;
  });
}

import { Arrangements } from "@/types/data";

export function getMinPriceForArrangement(arrangement: Arrangements) {
  const nights = arrangement.Prices[0].Prices[0].nights;

  let minPrice = arrangement.Prices[0].Prices[0].price;

  arrangement.Prices[0].Prices.forEach((dateAvailable) => {
    if (dateAvailable.price < minPrice) {
      minPrice = dateAvailable.price;
    }
  });
  return minPrice * nights;
}

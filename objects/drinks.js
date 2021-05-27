// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 }
];

function sortDrinkByPrice(drinks) {
  function DrinkPriceComparison(a, b) {
    let comparison = 0;
    if (a.price > b.price) {
      comparison = 1;
    } else if (a.price < b.price) {
      comparison = -1;
    }
    return comparison;
  }

  return drinks.sort(DrinkPriceComparison);
}

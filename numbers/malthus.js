// Malthusian
// assume 1 population needs 1 unit of food production.
// Food production & population both start at 100. The year starts at 0.
function malthusian(foodGrowth, popMult) {
  let population = 100;
  let food = 100;
  for (var index = 0; population <= food; index++) {
    population = population * popMult;
    food = food + foodGrowth;
  }
  return index;
}

// The function will pass:
// foodGrowth - an integer - Food production increase per year;
// popMult - a floating-point number -
//  The population growth multiplier per year.
// Examples

result = malthusian(4255, 1.41); // ➞ 20;
// { foodProd: 85,200, pop: 96,467.77..., year: 20 }

console.log(result);
// malthusian(9433, 1.09); //➞ 107;
// { foodProd: 1,009,431, pop: 1,010,730.28..., year: 107 }

//malthusian(5879, 1.77); //➞ 12;
// { foodProd: 70,648, pop: 94,553.84..., year: 12 }

// Return the year that the overtake happens, not the next year.
// Make sure you don't make the mistake of adding a year,
// then calculating the changes to food & population.
// That way, you miss year 0.

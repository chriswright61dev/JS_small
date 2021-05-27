// crtl k q
const cl = console.log;
function hasValidUnitOfMeasure(product = {}) {
  const { unitOfMeasure, comment } = product;
  return comment || unitOfMeasure === "L" || unitOfMeasure === "PCE";
}

cl(hasValidUnitOfMeasure({ product: "Cereals", unitOfMeasure: "L" }));

hasValidUnitOfMeasure({ product: "Milk", unitOfMeasure: "L" }); // ➞ true

hasValidUnitOfMeasure({ product: "Cereals", unitOfMeasure: "" }); // ➞ false

hasValidUnitOfMeasure({ product: "Beer", unitOfMeasure: false }); // ➞ false

hasValidUnitOfMeasure({ product: "Beef", unitOfMeasure: "Cow" }); // ➞ false

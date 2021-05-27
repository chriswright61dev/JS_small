function getDiscounts(nums, d) {
  const discount = parseInt(d) / 100; // ignores % and after
  return nums.map(x => x * discount);
}
module.exports = getDiscounts;

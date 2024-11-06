const soma = (...nums) => {
  if (nums.length === 0) return 0;
  if (!nums.every((num) => typeof num === "number")) {
    return null;
  }
  return nums.reduce((acc, cur) => acc + cur);
};

module.exports = { soma };

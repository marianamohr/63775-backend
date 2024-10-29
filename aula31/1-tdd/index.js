const soma = (...nums) => {
  if (nums.length === 0) return 0;

  if (!nums.every((num) => typeof num === "number")) return null;
  /*
  let validInput = true;
  for (let index = 0; index < nums.length; index++) {
    if (typeof nums[index] !== "number") {
      validInput = false;
    }
  }

  if (!validInput) {
    return null;
  }
    */
  return nums.reduce((acc, cur) => acc + cur);
};

const soma2 = (...nums) => {
  return nums.every((num) => typeof num === "number")
    ? nums.reduce((acc, cur) => acc + cur, 0)
    : null;
};

module.exports = soma2;

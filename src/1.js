/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}#
 * O(n^2)
 */
export const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i; j < nums.length; j += 1) {
      if (i == j) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error("No solution found");
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * O(n)
 * Improvements
 *
 * Use the complement of a number if we find the complement within the array we have a solution
 */
export function twoSumOptimized(nums, target) {
  const complements = {};

  nums.forEach((num, index) => {
    const complement = Math.abs(target - num);
    console.log(complement, num);
    if (complements[complement]) {
      return [(complements[complement], index)];
    }

    console.log(complements[complement]);

    complements[index] = index;
  });

  throw new Error("No solution found");
}

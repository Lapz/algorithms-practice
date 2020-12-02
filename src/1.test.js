import { twoSum, twoSumOptimized } from "./1";

describe("twoSum(nums,target)", () => {
  [twoSum].forEach((fn) => {
    it("Example 1", () => {
      expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it("Example 2", () => {
      expect(fn([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it("Example 3", () => {
      expect(fn([3, 3], 6)).toEqual([0, 1]);
    });
  });
});

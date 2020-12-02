describe("sym(args)", () => {
  expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
});

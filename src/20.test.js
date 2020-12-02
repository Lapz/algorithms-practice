import { isValid } from "./20";

describe("isValid(string)", () => {
  it("Example 1", () => {
    expect(isValid("()")).toEqual(true);
  });

  it("Example 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });

  it("Example 3", () => {
    expect(isValid("(]")).toEqual(false);
  });

  it("Example 4", () => {
    expect(isValid("([)]")).toEqual(false);
  });

  it("Example 5", () => {
    expect(isValid("{[]}")).toEqual(true);
  });

  it("Example 6", () => {
    expect(isValid("[")).toEqual(false);
  });
});

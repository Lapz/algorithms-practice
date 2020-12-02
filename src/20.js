/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s) {
  const stack = [];

  const popStack = (stack, toCheck) => {
    const last = stack[stack.length - 1];
    console.log(last, toCheck);

    if (last !== toCheck) {
      return false;
    }

    stack.pop();

    return true;
  };

  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];

    switch (ch) {
      case "(":
        stack.push("(");
        break;
      case "{":
        stack.push("{");
        break;

      case "[":
        stack.push("[");
        break;

      case ")":
        if (!popStack(stack, "(")) {
          return false;
        }
        break;

      case "}":
        if (!popStack(stack, "{")) {
          return false;
        }
        break;

      case "]":
        if (!popStack(stack, "[")) {
          return false;
        }
        break;

      default:
        throw new Error("Unknown token");
    }
  }

  return stack.length == 0;
};

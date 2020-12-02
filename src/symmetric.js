export function sym(...args) {
  return args.reduce((a, b) => {
    let result = [];

    for (let i = 0; i < a.length; i += 1) {
      if (b.indexOf(a[i]) < 0 && result.indexOf(a[i]) < 0) {
        result.push(a[i]);
      }
    }

    for (let i = 0; i < b.length; i += 1) {
      if (a.indexOf(b[i]) < 0 && result.indexOf(b[i]) < 0) {
        result.push(b[i]);
      }
    }

    return result;
  });
}

console.log(
  Object.fromEntries([
    ["a", "a"],
    [2, "b"],
  ])
);

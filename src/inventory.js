const updateInventory = (arr1, arr2) => {
  const curInv = Object.fromEntries(arr1.map((item) => [item[1], item[0]]));

  // turn the array into an object in the form k => v

  arr2.forEach(([key, value]) => {
    if (curInv[value]) {
      curInv[value] += key;
    } else {
      curInv[value] = key;
    }
  });
  // update the quantity

  return Object.entries(curInv)
    .sort((a, b) => (a[0] == b[0] ? 0 : a[0] > b[0] ? 1 : -1))
    .map((item) => [item[1], item[0]]);
}; // O(n)

const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv = [
  [2, "Hair Pin"],         
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
console.log(
  updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ],
    []
  )
);

export const binary_search = (
  arr: (string | number)[],
  item: string | number
): string | number | null => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (arr[middle] === item) {
      return middle;
    } else if (arr[middle] > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
};

// console.log(binary_search([1, 5, 6, 11, 16, 39, 52, 75, 77, 385], 11));

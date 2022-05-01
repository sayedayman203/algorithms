const smallestIndex = (arr: (string | number)[]): number => {
  if (arr.length === 0) {
    return -1;
  } else if (arr.length === 1) {
    return 0;
  }

  let smallest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[smallest] > arr[i]) {
      smallest = i;
    }
  }
  return smallest;
};

export const selection_sort = (
  arr: (string | number)[]
): (string | number)[] => {
  let sorted = [];
  while (arr.length > 0) {
    sorted.push(...arr.splice(smallestIndex(arr), 1));
  }
  return sorted;
};

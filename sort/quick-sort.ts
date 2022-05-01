export const quick_sort = (arr: (number | string)[]): (string | number)[] => {
  if (arr.length < 2) {
    return arr;
  } else {
    let el = arr.splice(0, 1)[0];
    let less = arr.filter((x) => x <= el);
    let greater = arr.filter((x) => x > el);
    return [...quick_sort(less), el, ...quick_sort(greater)];
  }
};

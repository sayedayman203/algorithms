export const BFS = (
  graph: {
    [key: string]: string[];
  },
  from: string,
  to: string
): string | null => {
  let viewed = { [from]: true }; // hash table better for get in O(1)
  let queue = [];

  queue.push(...graph[from]);

  // loop
  while (queue.length > 0) {
    let current = queue.shift() as unknown as string;

    // viewed before
    if (viewed[current]) {
      continue;
    }

    // check
    if (to === current) {
      return current;
    }

    // push rels
    viewed[current] = true;
    queue.push(...graph[current]);
  }

  return null;
};

// BFS With Level
export const BFSWL = (
  graph: {
    [key: string]: string[];
  },
  from: string,
  to: string
): { node: string; level: number } | null => {
  let viewed = { [from]: true }; // hash table better for get in O(1)
  let levelsQ = [];
  let current_level = 1;

  // push first level
  levelsQ.push(graph[from]);

  // loop
  while (levelsQ.length <= current_level) {
    while (levelsQ[current_level - 1].length > 0) {
      let current = levelsQ[current_level - 1].shift() as unknown as string;

      // viewed before
      if (viewed[current]) {
        continue;
      }

      // check
      if (to === current) {
        return { node: current, level: current_level };
      }

      // push rels
      viewed[current] = true;
      if (Array.isArray(levelsQ[current_level])) {
        levelsQ[current_level].push(...graph[current]);
      } else {
        levelsQ[current_level] = graph[current];
      }
    }

    // next level
    current_level++;
  }

  return null;
};

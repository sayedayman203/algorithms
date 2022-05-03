interface Costs {
  [key: string]: { parent: string; cost: number };
}

const lowest_cost = (
  costs: Costs,
  viewed: { [key: string]: boolean }
): string | null => {
  let min = Infinity;
  let node = null;
  for (let cost in costs) {
    if (!viewed[cost] && costs[cost].cost < min) {
      node = cost;
      min = costs[cost].cost;
    }
  }
  return node;
};

const reverse_costs = (
  costs: Costs,
  node: string,
  result: { [key: string]: number }[] = []
): { [key: string]: number }[] => {
  if (node === "") {
    return result;
  }

  result.unshift({ [node]: costs[node].cost });
  return reverse_costs(costs, costs[node].parent, result);
};

export const dijkstra = (
  graph: {
    [key: string]: {
      [key: string]: number;
    };
  },
  from: string,
  to: string
): { [key: string]: number }[] | null => {
  let viewed: { [key: string]: boolean } = {};
  let costs: Costs = {
    [from]: {
      parent: "",
      cost: 0,
    },
  };
  let node = lowest_cost(costs, viewed);
  while (node !== null) {
    // set costs
    Object.entries(graph[node]).map((rel) => {
      if (rel[0] === from) {
        return;
      }
      const new_cost = rel[1] + costs[node as unknown as string].cost;
      if (costs[rel[0]]) {
        // if exists
        if (new_cost < costs[rel[0]].cost) {
          costs[rel[0]] = {
            parent: node as unknown as string,
            cost: new_cost,
          };
        }
      } else {
        // new
        costs[rel[0]] = {
          parent: node as unknown as string,
          cost: new_cost,
        };
      }
    });
    viewed[node] = true;

    node = lowest_cost(costs, viewed);
  }

  if (costs[to]) {
    return reverse_costs(costs, to);
  } else {
    return null;
  }
};

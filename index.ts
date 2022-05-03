// search
import { binary_search } from "./search/binary-search";
// sort
import { quick_sort } from "./sort/quick-sort";
import { selection_sort } from "./sort/selection-sort";
// graph
import { BFS, BFSWL } from "./graphs/BFS";
import { dijkstra } from "./graphs/dijkstra";

const unsorted_arr = [11, 5, 39, 75, 16, 385, 1, 6, 77, 52];
const sorted_array = [1, 5, 6, 11, 16, 39, 52, 75, 77, 385];
const graph = {
  sayed: ["ahmed"],
  islam: ["hassan", "reem"],
  ahmed: ["sayed", "khloud"],
  hassan: ["khloud", "islam"],
  khloud: ["hassan", "ahmed"],
  reem: ["islam"],
};
const graph_with_cost = {
  sayed: { ahmed: 5 },
  islam: { hassan: 4, reem: 3 },
  ahmed: { sayed: 7, khloud: 9, hassan: 3 },
  hassan: { khloud: 11, islam: 2 },
  khloud: { hassan: 0, ahmed: 12, reem: 6, islam: 3 },
  reem: { islam: 40 },
};

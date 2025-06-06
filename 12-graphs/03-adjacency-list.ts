// GraphNode used for adjacency list
class GraphNode {
  val: string;
  neighbors: string[];

  constructor(val: string) {
    this.val = val;
    this.neighbors = new Array<string>();
  }
}

function buildAdjList(): Map<string, string[]> {
  let adjList = new Map<string, string[]>();
  let edges: [string, string][] = [
    ["A", "B"],
    ["B", "C"],
    ["B", "E"],
    ["C", "E"],
    ["E", "D"],
  ];
  adjList.set("A", new Array<string>());
  adjList.set("B", new Array<string>());

  for (let edge of edges) {
    let src = edge[0],
      dst = edge[1];
    if (!adjList.has(src)) {
      adjList.set(src, new Array<string>());
    }
    if (!adjList.has(dst)) {
      adjList.set(dst, new Array<string>());
    }
    adjList.get(src)!.push(dst);
  }
  return adjList;
}

// Count paths (backtracking)
function dfs(
  node: string,
  target: string,
  adjList: Map<string, string[]>,
  visit: Set<string>
): number {
  if (visit.has(node)) {
    return 0;
  }
  if (node == target) {
    return 1;
  }
  let count = 0;
  visit = new Set<string>();
  visit.add(node);
  for (let neighbor of adjList.get(node)!) {
    count += dfs(neighbor, target, adjList, visit);
  }
  visit.delete(node);
  return count;
}

// Shortest path from node to target.
function bfs(
  node: string,
  target: string,
  adjList: Map<string, string[]>
): number {
  let length = 0;
  let visit = new Set<string>();
  let q: string[] = [];
  visit.add(node);
  q.push(node);

  while (q.length != 0) {
    let queueLength = q.length;

    for (let i = 0; i < queueLength; i++) {
      let curr = q.shift()!;
      if (curr === target) {
        return length;
      }
      for (let neighbor of adjList.get(curr)!) {
        if (!visit.has(neighbor)) {
          visit.add(neighbor);
          q.push(neighbor);
        }
      }
    }
    length++;
  }
  return length;
}

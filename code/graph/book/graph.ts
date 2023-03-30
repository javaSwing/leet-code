import Dictionary from "./dictonary";

export default class Graph<T> {
  isDirected: boolean;
  vertices: T[];
  adjList: any;

  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
}

import Map from "./dictonary";
import Dictionary from "./dictonary";



export default class Graph<T extends string> {
  isDirected: boolean;
  vertices: T[];
  adjList: Map<Array<number>>; // 邻接表

  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary<Array<number>>();
  }

  /**
   * 添加一个顶点
   * @param v 
   */
  addVertex(v: T) {
    if(!this.vertices.includes(v)) {
      this.vertices.push(v);
      // 在边字典点，添加一个以顶点为key的，数组用于储存相关信息
      this.adjList.set(v,[]);
    }
  }

  /**
   * 建立两个顶点的边关系
   * @param v 
   * @param w 
   */
  addEdge(v, w) {
    if(!this.vertices.includes(v)) {
      this.addVertex(v);
    }

    if(!this.vertices.includes(w)) {
      this.addVertex(w);
    }

    // 建立关系
    this.adjList.get(v).push(w);
    if(!this.isDirected) { // 有向图只需单边就好
      this.adjList.get(w).push(v);
    }
  }


  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    // let s = '';
    // for (let index = 0; index < this.vertices.length; index++) {
    //   const element = this.vertices[index];
    //   s+= `${element} ->`
    //   this.adjList.get(element).forEach(v => {
    //     s+= ` ${v}`
    //   })
      
    //   s+= "\n";
    // }
    // return s;

    return this.vertices.join(",")
  }
}


// const graph = new Graph(); 
// const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12} 
// for (let i = 0; i < myVertices.length; i++) { // {13} 
//  graph.addVertex(myVertices[i]); 
// }

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C'); 
// graph.addEdge('A', 'D'); 
// graph.addEdge('C', 'D'); 
// graph.addEdge('C', 'G'); 
// graph.addEdge('D', 'G'); 
// graph.addEdge('D', 'H'); 
// graph.addEdge('B', 'E'); 
// graph.addEdge('B', 'F'); 
// graph.addEdge('E', 'I');

// console.log(graph.toString())
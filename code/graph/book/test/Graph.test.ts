import Graph from "../graph";

describe('Graph', () => {
    it('should add vertices to graph', () => {
      const graph = new Graph();
        
      graph.addVertex("A");

      graph.addVertex("B");

      expect(graph.toString()).toBe('A,B');
     
    });
})
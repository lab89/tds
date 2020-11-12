import * as TDS from 'tds';

console.log(TDS);
const graph = new TDS.Graph<string>()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(let i = 0 ; i < myVertices.length; i++){
    graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString());

graph.bfs(myVertices[0], function(p: string){console.log("탐색 : " + p)})
const shortestPath = graph.BFS(myVertices[0])
console.log(shortestPath);

const fromVertex = myVertices[0];
for(let i = 0 ; i < myVertices.length; i++){
    const toVertex = myVertices[i];
    const path = [];
    for(let v=toVertex; v!== fromVertex; v=shortestPath.predecessors[v]){
        path.push(v);
    }
    path.push(fromVertex);
    let s = path.pop();
    while(path.length){
        s += '-' + path.pop();
    }
    console.log(s);
}


// https://stackoverflow.com/questions/39454067/typescript-definitions-es6-class-and-constructors
export class Graph<T> {
    constructor();
    addVertex(v: T): void;
    addEdge(v: T, w: T): void;
    toString(): void;
    bfs(v: T, callback: (p: T)=>void): void
    BFS(v: T) : {
        distance : any
        predecessors: any
    }
    dfs(callback: (v: T)=>void): void;
    DFS(): {
        discovery: any,
        finished: any,
        predecessors: any
    }
}
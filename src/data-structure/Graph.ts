type BFSResult = {
    distance : Array<number>
    predecessors: Array<number>
}

class Graph<T> {
    public vertices: Array<T> = [];
    public edges: Map<T, Array<T>> = new Map<T, Array<T>>();
    public time: number = 0;
    constructor(){}
    
    public addVertex(v: T): void{
        this.vertices.push(v);
        this.edges.set(v, []);
    }

    public addEdge(v: T, w: T): void{
        this.edges.get(v).push(w);
        this.edges.get(w).push(v);
    }

    public toString(){
        let s = '';
        for(let i = 0; i < this.vertices.length; i++){
            s += this.vertices[i] + " -> "
            const neighbors = this.edges.get(this.vertices[i]);
            for(let j = 0 ; j < neighbors.length; j++){
                s += neighbors[j]
            }
            s += '\n';
        }
        return s;
    }

    private initializeColor(){
        const color: any = {};
        for(let i = 0; i < this.vertices.length; i++){
            color[this.vertices[i]] = 'white'
        }
        return color;
    }

    public bfs(v: T, callback?: (p: T)=>void){
        const color = this.initializeColor();
        const queue = [];
        queue.push(v);
        while(queue.length){
            console.log(queue.map((d)=>d))
            const u = queue.shift();
            const neighbors = this.edges.get(u);
            color[u] = 'grey';
            for(let i = 0 ; i  < neighbors.length; i++){
                const w = neighbors[i];
                if(color[w] === 'white'){
                    color[w] = 'grey';
                    queue.push(w);
                }                
            }
            color[u] = 'black'
            if(callback) callback(u)
        }
    }

    public BFS(v: T): {
        distance : any
        predecessors: any
    }{
        const color = this.initializeColor();
        const queue = [];
        const d: any = {};
        const pred: any = {};
        queue.push(v);
        for(let i = 0 ; i < this.vertices.length; i++){
            d[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null;
        }
        while(queue.length){
            console.log(queue.map((d)=>d))
            const u = queue.shift();
            const neighbors = this.edges.get(u);
            color[u] = 'grey';
            for(let i = 0 ; i  < neighbors.length; i++){
                const w = neighbors[i];
                if(color[w] === 'white'){
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.push(w);
                }                
            }
            color[u] = 'black'            
        }

        return {
            distance : d,
            predecessors : pred
        }


    }

    public dfs(callback: (v: T)=>void): void{
        const color = this.initializeColor();
        for(let i = 0; i < this.vertices.length; i++){
            if(color[this.vertices[i]] === 'white'){
                this.dfsVisit(this.vertices[i], color, callback);
            }
        }
    }

    private dfsVisit(u:T, color: any, callback: (v: T)=>void): void{
        color[u] = "grey";
        if(callback)
            callback(u);
        const neighbors = this.edges.get(u);
        for(let i = 0; i < neighbors.length; i++){
            const w = neighbors[i];
            if(color[w] === 'white'){
                this.dfsVisit(w, color, callback);
            }
        }
        color[u] = "black";
    }

    public DFS(): {
        discovery: any,
        finished: any,
        predecessors: any
    } {
        const color = this.initializeColor();
        const d: any = {};
        const f: any = {};
        const p: any = {};
        this.time = 0;
        for(let i = 0; i < this.vertices.length; i++){
            if(color[this.vertices[i]] === 'white'){
                f[this.vertices[i]] = 0;
                d[this.vertices[i]] = 0;
                p[this.vertices[i]] = null;
            }
        }
        for(let i = 0; i < this.vertices.length; i++){
            if(color[this.vertices[i]] === 'white'){
                this.DFSVisit(this.vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }

    private DFSVisit(u: T, color: any, d: any, f: any, p: any){
        console.log("방문" + u);
        color[u] = "grey";
        d[u] = ++this.time;
        const neighbors = this.edges.get(u);
        for(let i = 0; i < neighbors.length; i++){
            const w = neighbors[i];
            if(color[w] === "white"){
                p[w] = u;
                this.DFSVisit(w, color, d, f, p);
            }
        }

        color[u] = "black";
        f[u] = ++this.time;
        console.log("탐색 " + u)
    }
}
export default Graph;
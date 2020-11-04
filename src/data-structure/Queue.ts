class Queue<T>{
    private items: Array<T>;
    constructor(){
        this.items = [];
    }
    public enqueue(element: T): void{
        this.items.push(element)
    }
    public dequeue(): T{
        return this.items.shift();
    }
    public front(): T{
        return this.items[0];
    }
    public isEmpty(): Boolean{
        return this.items.length > 0;
    }
    public clear(): void{
        this.items = [];
    }
    public size(): number{
        return this.items.length;
    }
    public toString(): string{
        return this.items.toString();
    }
}
export default Queue;
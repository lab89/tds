class Stack<T>{
    private items: Array<T>;
    constructor(){
        this.items = [];
    }
    public push(item: T): void{
        this.items.push(item);
    }
    public pop(): T{
        return this.items.pop();
    }
    public peek(): T{
        return this.items[this.items.length - 1]
    }
    public isEmpty(): Boolean{
        return this.items.length > 0
    }
    public size(): number{
        return this.items.length;
    }
    public clear(): void{
        this.items = [];
    }
    public toString(): string{
        return this.items.toString()
    }
    
}

export default Stack;
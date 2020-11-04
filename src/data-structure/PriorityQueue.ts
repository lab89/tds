class QueueElement<T>{
    public element: T;
    public priority: number;
    constructor(element: T, priority: number){
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue<T>{
    private items: Array<QueueElement<T>>;
    constructor(){
        this.items = [];
    }
    public enqueue(element: T, priority: number): void{
        const queueElement = new QueueElement(element, priority);
        if(this.isEmpty())
            this.items.push(queueElement)
        else{
            let added = false;
            for(let i = 0; i < this.items.length; i++){
                if(queueElement.priority < this.items[i].priority){
                    this.items.splice(0, i, queueElement);
                    added = true;
                    break;
                }
            }
            if(!added) this.items.push(queueElement);
        }
    }
    public dequeue(): QueueElement<T>{
        return this.items.shift();
    }
    public front(): QueueElement<T>{
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
export default PriorityQueue;
class ListNode<T>{
    public element: T;
    public next: ListNode<T> | null;
    constructor(element: T){
        this.element = element;
        this.next = null;
    }
}
class LinkedList<T>{
    private length:number = 0;
    private head: ListNode<T> | null = null;
    construtor(){}

    public append(element: T): null{
        return null;
    }

    public insert(position: number, element: T): void {
        
    }

    public removeAt(position: number): void{}
    public remove(element: T): void{}
    public indexOf(element: T): number{ return 0;}
    public isEmpty(): Boolean { return true;}
    public size(): number{ return 0;}
    public toString(): string {return "";}
    public getHead(): ListNode<T> | null { return null;}
}

export default LinkedList;
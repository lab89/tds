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

    public append(element: T): void{
        const node = new ListNode<T>(element);
        let current = null;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
        }
        while(current.next){
            current = current.next;
        }
        current.next = node;
        this.length++;
        return null;
    }

    public insert(position: number, element: T): boolean {
        if(position >= 0 && position <= length){
            const node = new ListNode<T>(element);
            let current = this.head;
            let previous = null;
            let index = 0;
            if(position === 0){
                node.next = current;
                this.head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                length++;
                return true;
            }
        }else{
            return false;
        }
    }

    public removeAt(position: number): T | null{
        if(position > -1 && position < this.length){
            let current = this.head;
            let previous = null;
            let index = 0;

            if(position === 0){
                this.head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;            
        }else{
            return null;
        }
    }
    public remove(element: T): T | null{
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    public indexOf(element: T): number{ 
        let current = this.head;
        let index = -1;
        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return index;
    }
    public isEmpty(): Boolean { return this.length === 0;}
    public size(): number{ return this.length;}
    public toString(): string {
        let current = this.head;
        let string = "";
        while(current){
            string += current.element;
            current = current.next;
        }        
        return string;
    }
    public getHead(): ListNode<T> | null { return this.head;}
}

export default LinkedList;
class ListNode<T>{
    public element: T;
    public next: ListNode<T> | null;
    public prev: ListNode<T> | null;
    constructor(element: T){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList<T>{
    private length:number = 0;
    private head: ListNode<T> | null = null;
    private tail: ListNode<T> | null = null;
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

    public insert(position: number, element: T): Boolean {
        const node = new ListNode<T>(element);
        let current = this.head;
        let previous = null;
        let index = 0;
        if(position >= 0 && position <= length){
            if(position === 0){
                if(!this.head){
                    this.head = node;
                    this.tail = node;
                }else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }            
            }else if(position === length){
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        }else{
            return false;
        }        
    }

    public removeAt(position: number): T | null{
        if(position > -1 && position < length){
            let current = this.head;
            let previous = null;
            let index = 0;
            if(position === 0){
                this.head = current.next;
                if(this.length === 1){
                    this.tail = null;
                }else{
                    this.head.prev = null;
                }
            }else if(position === this.length - 1){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            }else {
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return current.element;
        }else{
            return null;
        }
        return null;
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

export default DoublyLinkedList;
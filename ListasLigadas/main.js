class Node {

    constructor(value) {
        this.value= value;
        this.next = null;
    }
}

// const node= new Node(10);

class LinkedList {

    constructor(value) {
        const newNode= new Node(value);
        this.head  = newNode;
        this.tail  = this.head; // newNode
        this.length= 1;
    }

    printList() {
        let temp= this.head;
        while(temp != null) {
            console.log(temp.value);
            temp= temp.next;
        }        
    }

    getHead() {        
        console.log(this.head, `es la cabeza de está lista ligada con valor ${this.head.value}.`);
    }

    getTail() {
        console.log(this.tail, `es la cola de está lista ligada con valor ${this.tail.value}.`);
    }

    getLength() {
        console.log(`La longitud de está lista ligada es ${this.length}.`)
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length> 0) 
            this.tail.next= newNode;
        else
            this.head= newNode;        
        this.tail     = newNode;
        this.length++;
        return this.length;
    }

    pop() {
        if(this.length === 0) 
            return undefined;
        let temp = this.head;
        let pre  = this.head;
        while(temp.next) {
            pre = temp;
            temp= temp.next;
            console.log('pre', pre);
            console.log('temp', temp);
        }
        console.log(pre);
        console.log(temp);
        this.tail= pre;
        this.tail.next= null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode= new Node(value);
        newNode.next = this.head;
        this.head    = newNode;
        this.length++;
        return this.length;
    }

    shift() {
        if(this.length === 0) 
            return undefined;
        let pre = this.head;
        this.head= this.head.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return pre;
    }


}

const linkedList= new LinkedList(6);

linkedList.printList();
linkedList.getHead();
linkedList.getTail(),
linkedList.getLength();

linkedList.push(4);
linkedList.push(5);
linkedList.push(10);
linkedList.printList();
const popMethod= linkedList.pop();
linkedList.getHead();
linkedList.getTail(),
linkedList.getLength();
console.log(popMethod);
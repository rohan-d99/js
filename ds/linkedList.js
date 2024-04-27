class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // ---- Inserts at the end of list
    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // ---- Removes from the end of list
    pop() {
        if (!this.length) return undefined;
        let current = this.head;
        let newTail = this.head;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // ---- Removes from start of list
    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead;
    }

    // ---- Inserts at start of list
    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // ---- Returns node at given index
    get(index) {
        if (index < 0 || index > this.length - 1) return undefined;

        let count = 0;
        let current = this.head;

        while(count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    // ---- Updated the specified index with new value
    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    // ---- Inserts at the specified index
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        
        if (index === this.length) {
            return !!this.push(value);
        } else if (index === 0) {
            return !!this.unshift(value);
        } else {
            const newNode = new Node(value);
            const prevNode = this.get(index - 1);
            // points new node to next node
            newNode.next = prevNode.next;
            // points prev node to newly created node
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    }

    // ---- Removes specified index
    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        
        const prevNode = this.get(index - 1);
        const removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    // ---- Reverses the list
    reverse() {
        if (!this.head) return undefined;
        if (this.length === 1) return this;

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let previous = null;
        let next = null;

        while (node) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }

        return this;
    }
}

const list1 = new SinglyLinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);

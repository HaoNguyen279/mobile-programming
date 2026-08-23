class Stack<T> {
    private elements: T[] = [];
    push(item: T): void {
      this.elements.push(item);
    }
    pop(): T | undefined {
      return this.elements.pop();
    }
    peek(): T | undefined {
      return this.elements[this.elements.length - 1];
    }
    isEmpty(): boolean {
      return this.elements.length === 0;
    }
}
  
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log("đỉnh :", myStack.peek()); // 3
console.log("pop:", myStack.pop());   // 3
console.log("isEmpty:", myStack.isEmpty()); // false
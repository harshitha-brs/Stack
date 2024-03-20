/** 
 Author : Build Rise Shine 

Created : 2023

Script : Stack 

Description : Implementation of Stack Data Structure

  The Stack class represents a custom implementation of a stack data structure in JavaScript. 
  It provides methods to perform basic stack operations, such as adding elements to the top of the 
  stack (push) and removing elements from the top of the stack (pop). 

  The stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning 
  the last element added to the stack will be the first one to be removed. The example demonstrates 
  how to create an instance of the Stack class and perform push and pop operations on it.

(c) Copyright by BRS Studio. 
**/

// Class for creating a Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class for Stack
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
    this.capacity = 3;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length >= this.capacity;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }
}

// Implementation
let myStack = new Stack(7);
myStack.push(23);
myStack.push(3);
myStack.push(11);


console.log(myStack.isFull());

console.log(myStack);


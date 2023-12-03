/* sophisticated_code.js */

// This code is an implementation of a priority queue data structure
// It uses a binary heap as the underlying data structure

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Method to add an element to the priority queue
  enqueue(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  // Method to remove the highest priority element from the priority queue
  dequeue() {
    if (this.heap.length === 0) return null;
    const highestPriorityElement = this.heap[0];
    const lastElement = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.bubbleDown(0);
    }
    return highestPriorityElement;
  }

  // Method to re-heapify the elements after adding a new element
  bubbleUp(index) {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  // Method to re-heapify the elements after removing the highest priority element
  bubbleDown(index) {
    const element = this.heap[index];
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;
      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < this.heap[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }
      if (swapIndex === null) break;
      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }
    this.heap[index] = element;
  }

  // Method to check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Method to get the size of the priority queue
  size() {
    return this.heap.length;
  }
}

// Example usage:

const pq = new PriorityQueue();
pq.enqueue(10);
pq.enqueue(5);
pq.enqueue(15);
pq.enqueue(2);

console.log(pq.size()); // Output: 4
console.log(pq.dequeue()); // Output: 2
console.log(pq.dequeue()); // Output: 5
console.log(pq.isEmpty()); // Output: false
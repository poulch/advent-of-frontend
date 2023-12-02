export class ChristmasQueue<T> {
  private queueMap: Map<number, T[]> = new Map();

  enqueue(item: T, priority: number): void {
    if (!this.queueMap.has(priority)) {
      this.queueMap.set(priority, []);
    }
    const queue = this.queueMap.get(priority);
    queue?.push(item);

    this.queueMap.set(priority, queue!);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("There are no letters in the queue!");
    }

    const highestPriority = Math.max(...this.queueMap.keys());
    const queue = this.queueMap.get(highestPriority);

    const item = queue?.shift();
    if (queue?.length === 0) {
      this.queueMap.delete(highestPriority);
    }

    return item;
  }

  isEmpty() {
    const values = this.queueMap.values();
    for (const value of values) {
      if (value.length > 0) {
        return false;
      }
    }

    return true;
  }
}

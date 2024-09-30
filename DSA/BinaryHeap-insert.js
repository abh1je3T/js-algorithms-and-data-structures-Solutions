class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(value) {
        // Add the new value to the end of the array
        this.values.push(value);
        // Bubble up the value to its correct position
        this.bubbleUp();
    }
     bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            // Find the parent index
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            // If the element is less than or equal to its parent, the heap is ordered
            if (element <= parent) break;

            // Swap the element with its parent
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}
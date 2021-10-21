export default class ArrayAnalysis {
    constructor(array){
        this.array = array;
    }

    getAverage() {
        const totalSum = this.array.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });

        const entries = this.array.length;
        return totalSum / entries;
    }

    getMin() {
        return Math.min(...this.array);
    }

    getMax() {
        return Math.max(...this.array);
    }

    getLength() {
        return this.array.length;
    }

    getObject() {
        const protoObject = {};
        
        protoObject.average = this.getAverage();
        protoObject.min = this.getMin();
        protoObject.max = this.getMax();
        protoObject.length = this.getLength();

        return protoObject;
    }
}

const analyze = new ArrayAnalysis([1,8,3,4,2,6]);
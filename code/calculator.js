export default class Calculator {
    static #getResult(operator, numbersArray) {
        const getString = (total, currentNumber) => `return ${total} ${operator} ${currentNumber};`;
        
        // converts the string to a function and executes it
        const calculateFunction = (total, currentNumber) => Function(getString(total, currentNumber))();

        const total = numbersArray.reduce((total, currentNumber) => calculateFunction(total, currentNumber));
        return total;
    }

    static add = (...numbers) => this.#getResult('+', numbers);

    static subtract = (...numbers) => this.#getResult('-', numbers);

    static divide = (...numbers) => this.#getResult('/', numbers);

    static multiply = (...numbers) => this.#getResult('*', numbers);
}
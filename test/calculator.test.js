import Calculator from "../code/calculator";

test('Is able to do addition with multiple numbers', () => {
    expect(Calculator.add(1, 1, 1)).toEqual(3);
});

test('Is able to do substraction with multiple numbers', () => {
    expect(Calculator.subtract(1, 1, 1)).toEqual(-1);
});

test('Is able to do division with multiple numbers', () => {
    expect(Calculator.divide(1, 1, 1)).toEqual(1);
});

test('Is able to multiply with multiple numbers', () => {
    expect(Calculator.multiply(2, 2, 2)).toEqual(8);
})

test('addition/substraction/division with floating point numbers', () => {
    expect(Calculator.add(2.1, 0.9)).toBeCloseTo(3);
    expect(Calculator.subtract(2.5, 5.5)).toBeCloseTo(-3);
    expect(Calculator.divide(1.2, 1.2)).toBeCloseTo(1);
    expect(Calculator.multiply(2.5, 2.5)).toBeCloseTo(6.25);
});
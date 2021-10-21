import ArrayAnalysis from '../code/arrayAnalysis';

const object = new ArrayAnalysis([1,8,3,4,2,6]).getObject();

test('Object contains working average property', () => {
    expect(object.average).toEqual(4);
});
test('Object contains working min property', () => {
    expect(object.min).toEqual(1);
});
test('Object contains working max property', () => {
    expect(object.max).toEqual(8);
});
test('Object contains working length property', () => {
    expect(object.length).toEqual(6);
});
test('Object contains no extra properties', () => {
    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
});
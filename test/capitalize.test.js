import capitalize from '../code/capitalize.js';

test('Returns string with first letter capitalized', () => {
    const capitalizedString = capitalize('correct');
    expect(capitalizedString).toEqual('Correct');
});
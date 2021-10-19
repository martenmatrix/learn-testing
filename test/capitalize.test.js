import capitalize from '../code/capitalize';

test('Returns string with first letter capitalized', () => {
    const capitalizedString = capitalize('correct');
    expect(capitalizedString).toEqual('Correct');
});
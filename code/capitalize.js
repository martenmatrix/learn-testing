export default function capitalize(string) {
    const firstLetter = string.charAt(0);
    const stringWithoutFirstLetter = string.slice(1);
    return firstLetter.toUpperCase() + stringWithoutFirstLetter;
}

function capitalize2(string) {
    const charArray = string.split('');
    charArray[0] = charArray[0].toUpperCase();
    return charArray.join('');
}

capitalize('test'); /*?.*/
capitalize2('test'); /*?.*/
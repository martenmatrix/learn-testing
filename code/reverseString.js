export default function reverseString(string) {
    const iterableChars = string.length - 1; //
    let reversedString = '';

    for (let i = iterableChars; i >= 0; i--) {
        reversedString += string.charAt(i);
    }

    return reversedString;
}

function reverseString2(string) {
    const charArray =  string.split('');
    charArray.reverse();
    const reversedString = charArray.join('');
    return reversedString;
}

function reverseString3(string) {
    const charArray = string.split('');
    const reversedString = charArray.reduce((reversedString, char)=> `${char}${reversedString}`, '');
    return reversedString;
}

reverseString('Hello'); // ?.
reverseString2('Hello'); // ?.
reverseString3('Hello'); // ?.
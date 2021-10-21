export default class Caesar {
    static alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    static #getIndexNumber(letter) {
        const lowercaseLetter = letter.toLowerCase();
        return this.alphabetArray.indexOf(lowercaseLetter);
    }

    static #getLetter(index) {
        return this.alphabetArray[index];
    }

    static #isUppercase = (char) => /[A-Z]/.test(char);

    static #getTranslatedIndex = (currentIndex, shift) => {
        // + is right shift
        const amountToShift = currentIndex + shift;
        
        // if newIndex is greater than 25, start counting from 0
        // if newIndex is smaller than 0, start counting from 25
        let newIndex = ((amountToShift % 26) + 26) % 26;

        return newIndex;
    }

    static #isSpecialCharacter = (char) => !(/[A-Z]|[a-z]/.test(char));

    static #translate(rightShift, value) {
        const chars = value.split('');
        const translatedText = chars.reduce((translatedText, currentChar) => {
            if(this.#isSpecialCharacter(currentChar)) return translatedText + currentChar;
            
            const currentIndex = this.#getIndexNumber(currentChar);
            const translatedIndex = this.#getTranslatedIndex(currentIndex, rightShift);

            let translatedLetter = this.#getLetter(translatedIndex);

            if (this.#isUppercase(currentChar)) { 
                translatedLetter = translatedLetter.toUpperCase(); 
            }

            return translatedText + translatedLetter;
        }, '');

        return translatedText;
    }

    static encipher(key, value) {
        return this.#translate(key, value);
    }

    static decipher(key, value) {
        return this.#translate(-key, value);
    }
}


const caesarCipher = (str, shift) => {
    if (shift === 0) return str;
  
    return str.replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
    );
};
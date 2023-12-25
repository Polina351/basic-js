const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true ) {
    this.reverse = isReverse;
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    string = string.toUpperCase();
    key = key.toUpperCase();

    const alphabetPower = 26;
    const codeSymbolA = 'A'.charCodeAt(0);

    const res = []; // str or arr

    for (let i = 0, j = 0; i < string.length; i++) {

      const currentSymb = string[i];

      if (/^[A-Z]$/.test(currentSymb)) {
        const indexSymb = string.charCodeAt(i) - codeSymbolA;
        const shift = key.charCodeAt(j % key.length) -codeSymbolA;

        res.push(String.fromCharCode(codeSymbolA + (indexSymb + shift) % alphabetPower));
        j++;
      } else {
        res.push(currentSymb);
      }
    }
    return this.reverse ? res.join('') : res.reverse().join('');
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    string = string.toUpperCase();
    key = key.toUpperCase();

    const alphabetPower = 26;
    const codeSymbolA = 'A'.charCodeAt(0);

    const res = []; // str or arr

    for (let i = 0, j = 0; i < string.length; i++) {

      const currentSymb = string[i];

      if (/^[A-Z]$/.test(currentSymb)) {
        const indexSymb = string.charCodeAt(i) - codeSymbolA;
        const shift = key.charCodeAt(j % key.length) - codeSymbolA;
        const charCode = (indexSymb - shift + alphabetPower) % alphabetPower + codeSymbolA;

        res.push(String.fromCharCode(charCode));
        j++;
      } else {
        res.push(currentSymb);
      }
    }
    return this.reverse ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

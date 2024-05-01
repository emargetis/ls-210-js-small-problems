/*
Problem:
-input: string of text and a text key
-output: string of text which is encrypted using the vigenere cipher
-rules:
  -take in a keyword which represents the encryption key
  -each letter in the encryption key is treated as a shift value
  -map each letter in the encryption in order repeatedly againts each letter of the plain text
  -look up the encryption key index for each letter in encryption and offset each value by that amount
  -if the key + index exceeds 26 then wrap around
  -case does not matter, treat every letter the same
  -keep any non-alphabetic character in same place for the return
-question:
  -input validation:
    - do we need to make sure both arguments are present? no need
    - both arguments are strings? no need
    - both arguments have length greather than 0? no need
  -what happens if the key is longer than the string? truncate the key
Examples: see test case below
DS: array for string, array for alphabet string for return value
Algo:
-declare a constant which contains the alphabet in lowercase
-convert string to an array of characters
-set a `counter` variable to keep track of the index for the keyword used in mapping stating at 0
-set a `length` variable to length of keyword
-iterate through the array of characters using map
  -check to see if character is alphabetic by looking it up in the alphabet array
  -if so, 
    -call encrypt and pass in char, index of Char, keyword, `counter`, `length` and assign return value to encryptedChar
    -increment `counter` variable by 1
    -return encrpytedChar
  
  -if not, simply return character

ENCRYPT
- set `keywordIndex` equal to `counter` % `length` - 1
- set `keywordLetter` equal to keyword[keywordIndex];
- look up the index in the alphabet constant and set equal to `offsetIndex`
- look up the index of the `char` in lowercase and set equal to `charIndex`
- Add the `offsetIndex` to `charIndex` and mod by 26
- set `returnChar` equal to alphabhet const[`offsetIndex`];
*/

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function vigenereCipher(text, keyword) {
  let textArr = text.split('');
  
  let counter = 0;
  let keywordLength = keyword.length;
  
  
  return textArr.map((char, index) => {
    if (ALPHABET.includes(char.toLowerCase())) {
      let encryptedChar = encrypt(char, index, keyword, counter, keywordLength);
      counter += 1;
      return char.toUpperCase() === char ? encryptedChar.toUpperCase() : encryptedChar;
    } else {
      return char;
    }
  }).join('');
  
}

function encrypt(char, index, keyword, counter, keywordLength) {
  let keywordIndex = (counter % keywordLength);
  let keywordLetter = keyword[keywordIndex];
  let offsetIndex = ALPHABET.indexOf(keywordLetter.toLowerCase());
  let charIndex = ALPHABET.indexOf(char.toLowerCase());
  let newCharIndex = (charIndex + offsetIndex) % 26;
  return ALPHABET[newCharIndex];
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat"));

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
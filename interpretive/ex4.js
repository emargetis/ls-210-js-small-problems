/*
Problem: take a string and an encryption key and return an encrypted string
-input: a string and an encryption key
-output: a string
-rules:
  - a leter is encrypted by changing it to a different letter based on its alphabet postion and the key which shifts the position over
  - it only encrpyts letters both lowercase and uppercase
  - a non-letter is left as is
  - if a key exceeds the length of the alphabet then it warps around from the beginning
-questions:
  -input validation
    -ensure that text is a string? return null
    -ensre that key is an integer? return null
    -ensure that 2 arguments are provided? return null
    -arguments are swapped? nope, return null
  -can we accept negative keys? no
Examples: see belwo
DS: use an array for alphabet and iterate through string for input
Algo:
-create an alphabet array which has nothing at 0, a at 1, b at 2, etc
-validate input using guard clauses:
  - check to make sure both arguments are provided
  - check to make sure text is a string
  - check to make sure key is an integer
  - check to make sure key is a positive integer
-create a blank string called `return`
-Iterate from the start of the string to the end of the string (for)
  - check to see if character is a letter
    - if so
      -for each letter determine the case and save the case as upper or lower (use a boolean for upper)
      -convert character to lowercase
      -determine the index of the letter i nthe alphabet array
      -add the key to the index and save as `newIndex`
      -if `newIndex` > 26 then reassign `newIndex` to `newIndex` % 26 otherwise do nothing
      -look up `newCharacter` using `newIndex` and the alphabet array
      -append `newCharacter` to `return`
    - if not, append the character to `return`
*/

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarEncrypt(text, key) {
  if (invalidateArguments(text, key)) return null;
  
  let returnStr = '';
  
  for (let idx = 0; idx < text.length; idx += 1) {
    let char = text[idx];
    
    if(/[a-z]/i.test(char)) {
      returnStr += encrypt(char, key)
    } else {
      returnStr += char;
    }
  }
  
  return returnStr;
}

function encrypt(char, key) {
  let upper = char.toUpperCase() === char ? true : false;
    
  char = char.toLowerCase();
  
  let originaIndex = ALPHABET.indexOf(char);
  let newIndex = (originaIndex + key) % 26;
  let newChar = ALPHABET[newIndex];
  
  return upper ? newChar.toUpperCase() : newChar;
}

function invalidateArguments(text, key) {
  if (text === undefined || key === undefined) return true;
  if (typeof text !== 'string') return true;
  if (!(Number.isInteger(key))) return true;
  if (key < 0) return true;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)); //2 + 25 - 26 -> 1 //if position + key > 26 % 26 else position + key 
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
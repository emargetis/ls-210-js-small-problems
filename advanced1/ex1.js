/*
P:
-in: a text template
-out: a string that has template filled in
-rules:
  -we should be plugging in the appropriate word type for a template place holder
  -the word plugged in should be random
-questions:
  -any restrictions around the template data type? can it be array or string? string
  -do we need to validate that string is provided?
    - make sure argument is not null? Yes
    - make sure argument is a string? Yes
    - make sure argument is length greather than 0?
Ex: see below
DS: leave them as strings
Algo:
  -input validation using a guard clause and a helper function:
    -if guard clause is true, return 'invalid input'
    -if guard clause is false, continue
      -guard clause:
        -check to see if argument is provided by arg === undefined
        -check to see if argrument is string type using type of
        -check to see if argument is length > 0
  -use string.replace(regex) to relace all verbs
  -use string.replace(regex) to relace all nouns
  -use string.replace(regex) to relace all adjectives
  -use string.replace(regex) to relace all adverbs
  -return the modified string

*/

// These examples use the following list of replacement texts:

let adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
let nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
let verbs = ["jumps", "lifts", "bites", "licks", "pats"];
let adverbs = ["easily", "lazily", "noisily", "excitedly"];

function madlibs(template) {
  if (invalidateArg(template)) return "invalid template";

  let adjectivesReplaced = template.replace(/\*adjective\*/g, randomAdj);
  let nounsReplaced = adjectivesReplaced.replace(/\*noun\*/g, randomNoun);
  let verbsReplaced = nounsReplaced.replace(/\*verb\*/g, randomVerb);
  let adverbsReplaced = verbsReplaced.replace(/\*adverb\*/g, randomAdverb);

  return adverbsReplaced;
}

function randomAdj() {
  return adjectives[Math.floor(Math.random() * adjectives.length)]
}

function randomNoun() {
  return nouns[Math.floor(Math.random() * nouns.length)]
}

function randomVerb() {
  return verbs[Math.floor(Math.random() * verbs.length)]
}

function randomAdverb() {
  return adverbs[Math.floor(Math.random() * adverbs.length)]
}

function invalidateArg(arg) {
  if (arg === undefined) return true;
  if (typeof arg !== 'string') return true;
  if (arg.length < 1) return true;
}

let template3 = "";
console.log(madlibs(template3));      // invalid template
console.log(madlibs());      // invalid template

let template4 = [];
console.log(madlibs(template4));      // invalid template

let template1 = "The *adjective* brown *noun* *adverb* *verb* the *adjective* yellow *noun*, who *adverb* *verb* his *noun* and looks around.";
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.
console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.


let template2 = "The *noun* *verb* the *noun*'s *noun*";
console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".
console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
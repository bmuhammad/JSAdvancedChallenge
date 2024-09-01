/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

//const anagrams = (strA, strB) => {
  //create character map for each string
  //loop over keys. to see if they are equal
  //must also check size of each string are the same. do this first. if one string is shorter and use as string a then it will pass
  // all test except for one where string a will not have all the characters of string b bc it is smaller

  //const charMapA = buildCharMap(strA); //new Map(); create new method to prevent duplication
  //const charMapB = buildCharMap(strB); //new Map();

  // for (const char of removeSpacesAndLowerCase(strA)) {  //duplicate code removed replace with method call strA.toLowerCase().replaceAll
  //  if (char !== " ") {
  //    continue;//removed this block of code bc can use replace method
  // }
  //    charMapA.set(char, charMapA.get(char) + 1 || 1);
  // }

  //this is also duplicate . created method for it
  // for (const char of removeSpacesAndLowerCase(strB))  { //duplicate code removed replace with method call strA.toLowerCase().replaceAll
  //     charMapB.set(char, charMapB.get(char) + 1 || 1);
  // }

  //if (charMapA.size !== charMapB.size) {
  //  return false;
 // }

 // for (const [charA, countA] of charMapA) {
   // if (charMapB.get(charA) !== countA) {
    //  return false;
   // }
  //}
 // return true;
  //return [charMapA, charMapB];
//};

//const buildCharMap = (str) => {
//  const charMap = new Map();

//  for (const char of removeSpacesAndLowerCase(str)) {
    //duplicate code removed replace with method call strA.toLowerCase().replaceAll
 //   charMap.set(char, charMap.get(char) + 1 || 1);
 // }
 // return charMap;
//};

//const removeSpacesAndLowerCase = (str) => {
//  return str.toLowerCase().replaceAll(" ", "");
//};



//another top tech better way of doing
const anagrams = (strA, strB) => {
    //set both strings to lower case
    //remove all the spaces
    //sorting the strings
    // removing duplicated code const cleanedA =  strA.toLowerCase().replaceAll(" ", "").split("").sort().join("");
      // const cleanedB =  strB.toLowerCase().replaceAll(" ", "").split("").sort().join("");

      
  // return cleanedA === cleanedB

  return cleanString(strA) === cleanString(strB);
}

const cleanString = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
}
module.exports = anagrams;

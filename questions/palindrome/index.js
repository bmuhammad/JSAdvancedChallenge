/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 * 
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */


//notes Loop over characters in the first half of the string
//      if the character is not equal to the character at the opposite index 
    //return false
// return true

// TOP TECH SOLUTION less checks

const palindrome = (str) => {
    const middle = Math.floor(str.length / 2);
    for (let i = 0; i < middle; ++i) {
      const oppositeIndex = str.length - 1 - i;
      if (str[i] !== str[oppositeIndex]) {
        return false;
      }
    }
    return true;
  };

// SIMPLEST SOLUTION
 //const palindrome = (str) => {
  // const reversedString = str.split("").reverse().join("");
  // return str === reversedString;
//};


//can use every method but inefficenct because it does duplicate checks
// INEFFICIENT SOLUTION (worth mentioning)
// const palindrome = (str) => {
//   return str.split("").every((char, index) => (
//     char === str[str.length - 1 - index]
//   ))
// };



//my first solution  
//const palindrome = (str) => {
  //const reversedString = str.split('')
  //.reduce((accumulator, currentValue) => currentValue + accumulator);
  
 // if(arr == str)
 // {return true}
 // else
 // {
//    return false;
 // }

 // return str === reversedString;
//};

module.exports = palindrome;

//undefined means not returning anything

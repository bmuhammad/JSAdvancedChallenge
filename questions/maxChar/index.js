/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

//Common Questions
//Which character appears the most amount of times?  **uses a character map**
//Does string A contain the same characters as string B(anagram) create 2 character maps and check each character against each other
//Are there any duplicate characters character map ...loop through

const maxCharacter = (str) => {
  let maxChar = "";
  let max = 0;

  //Create a character map
  //const charMap = {};
  //for (let char of str) {
  //  charMap[char] = charMap[char] + 1 || 1;
  // }

  //Loop over every character in the character map
  //If the value of the character is greater than max
  //set max to the value
  //set maxChar to the character

  // for (let char in charMap) {
  // if (charMap[char] > max) {
  //   max = charMap[char];
  //   maxChar = char;
  // }
  //}

  //best way for top tech use map data structure
  const charMap = new Map();

  for (const char of str) {
    //to get the count of times appearing for a map
    //const count = charMap.get(char);
   // charMap.set(char, count + 1 || 1);
   //const count = charMap.get(char)
   charMap.set(char, charMap.get(char) + 1 || 1);
  }

  for (const [char, count] of charMap) {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }

  //return maxChar
  return maxChar;
};

module.exports = maxCharacter;

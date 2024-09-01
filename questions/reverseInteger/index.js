/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

//const reverseInteger = (int) => {
//turn number into string then to array
//return int.toString().split("").reverse().join("") // this does not pass though. all test fail
//need to turn into number
// return parseInt( int.toString().split("").reverse().join("")); // this does not pass though. only 2 out of three pass.
//needs to be turned into negativ

//better but needs to be cleaned up
//const reversed =  parseInt( int.toString().split("").reverse().join(""));

//if (int < 0){
//  return reversed * -1;
//}
//return reversed;
//};

///turn to ternary operator. can make better

//const reverseInteger = (int) => {
 // const reversed = parseInt(int.toString().split("").reverse().join(""));

 // return int < 0 ? reversed * -1 : reversed;
//};


//cleaned up better can make one line but not readable good this way
const reverseInteger = (int) => {
    const reversed = int.toString().split("").reverse().join("");
  
    return parseInt(reversed) * Math.sign(int)
  };
  

module.exports = reverseInteger;

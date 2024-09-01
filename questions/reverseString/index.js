/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'



//Solution 3 Best practice
const reverseString = (str) => {
     
  
    }


//Solution 2
//const reverseString = (str) => {
     
//return str.split('').reverse().join('');


//const arr = str.split('');
//const reversedArr = arr.reverse();
//return reversedArr.join('');
//}

//Solution 1
//const reverseString = (str) => {
//let reversed = '';

//for (let i = 0; i < str.length; ++i) {
 // reversed = str[i] + reversed;
//}

//ES6 loop strings like this now
//for (let char of str){
 //  reversed =   char + reversed;
//  }
  

//return reversed;
//};

module.exports = reverseString;



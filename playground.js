//const arr = [1, -1, 2, 3];

//optimized by removing the second arguement.This would start at the first element in array
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

//const sum = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
//   })
// can make one line
//const sum = arr.reduce((accumulator, current) => accumulator + current);

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
//const sum = arr.reduce((accumulator, currentValue) => {
//return accumulator + currentValue;
//}, 0)
//let sum = 0
//for(let elem of arr) {
//   sum += elem;
//}

// console.log('accumulator', accumulator);
//console.log(`a = ${accumulator}, c = ${currentValue} => a =  ${accumulator + currentValue}`)
//console.log(sum);

///character map example
//const str = "Simplified !";
//const charMap = {};

//for (let char of str) {
  //console.log(char)
  // charMap[char] = 1;// just maps to 1 { S: 1, i: 1, m: 1, p: 1, l: 1, f: 1, e: 1, d: 1, ' ': 1, '!': 1 }
  //used if to check if character was seen before. needs optimization though
  // if (!charMap[char]) {
  // charMap[char] = 1;
  // }
  // else {
  // charMap[char] = charMap[char] + 1; //sets to naan  need to add condition to check
  //  }

  //optimized
 // for (let char of str) {
 //   charMap[char] = charMap[char] + 1 || 1;
 // }
//}

//even better way for top tech
//const charMap = new Map(); //Data structure to map 1 value to another. Map data structure made to be iterated over. can create a for loop

//can change let to const bc it is not changing. best practice
//for (let char of str) {
    //to get the count of times appearing for a map
  //  const count = charMap.get(char)
   // charMap.set(char, count + 1 || 1);
//}

//for (let keyAndValue of charMap) {
    //const key = keyAndValue[0];
 //   const [key, value] = keyAndValue;
    //const value = keyAndValue[1]
   // console.log(keyAndValue);
 //  console.log(key, value);
//}

// in one line of code we can get key and value
//for (let [key, count] of charMap) {
 //   console.log(key, count);
//}

//const arr = [1, 2, 3]
//in es6 i can get key and value faster using. destructiong
//const [first, second] = arr
//console.log(first, second) will yield 1 2
//console.log(charMap);


////Anagram
//const catsMap = {c: 1, a: 1, t: 1, s:1 };
//to check length of object catsMap. look at the keys
//console.log(Object.keys(catsMap)) will put keys in an array
//to check lenght add .length
//console.log(Object.keys(catsMap).length)

//to use top tech method

//const catsMap = new Map();

//catsMap.set("c", 1);
//catsMap.set("a", 1);
//catsMap.set("t", 1);
//catsMap.set("s", 1);



//console.log(catsMap);

///Array chunk 
//const arr = [0, 1, 2, 3, 4]
//const size = 2,

//for ( let i = 0; i < arr.length; i += size){
//console.log(i);
//}


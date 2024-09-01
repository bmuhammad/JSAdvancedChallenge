/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

//approach
//Convert the Array of Objects into an Array of Id's
//convert the array of Id's into an Array of unique ID's
//Join the array to create a string of ID's separated by ","

//Brute force
//const stringifyId = (arr) => {
//const idArray = arr.map(obj => obj.id);
//const uniqueArray = [];
// let idString = "";

//removes duplicates. makes unique ids.
//for (let id of idArray) {
//   if (!uniqueArray.includes(id)) {
//   uniqueArray.push(id);
// }
// }

//need commas
//for (let i = 0; i < uniqueArray.length; ++i) {
//if we are not on last element
//  if (i !== uniqueArray.length - 1) {
//   idString += `${uniqueArray[i]}, `
// }
//  else {
//   idString += uniqueArray[i];
//  }
//. add the id and a comma else just add the id
//}

//return idString;
//}

//better solution but not the best
//const stringifyId = (arr) => {
//const idArray = arr.map(obj => obj.id);
//const uniqueArray = [];

//for (let id of idArray) {
//   if (!uniqueArray.includes(id)) {
//   uniqueArray.push(id);
// }
// }

//  return uniqueIdArray.join(", ");
// };

//top tech
//can decease most of the lines above
const stringifyId = (arr) => {
  const idArray = arr.map((obj) => obj.id);

  //set operator converts to unique id ... is a spread syntax
  const uniqueIdArray = [...new Set(idArray)];

  return uniqueIdArray.join(", ");
};

module.exports = stringifyId;

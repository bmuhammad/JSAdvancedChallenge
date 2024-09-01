/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

//Create an empty 'chunkedArray' to hold the subarrays

//for each inex in the array that is divisible by 'size'
//create a subarray of length 'size' that slices from the current index
//push thesubarray to our chunkedarray
//return 'chunked array'

const arrayChunk = (array, size) => {
  //Create an empty 'chunkedArray' to hold the subarrays
  const chunkedArray = [];

  //for each inex in the array that is divisible by 'size'
  for (let i = 0; i < array.length; i += size) {
    //create a subarray of length 'size' that slices from the current index
    const subarray = array.slice(i, i + size);
    //push thesubarray to our chunkedarray
    chunkedArray.push(subarray);
  }

  //return 'chunked array'
  return chunkedArray;
};

module.exports = arrayChunk;

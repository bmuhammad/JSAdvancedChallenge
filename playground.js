const arr = [1, -1, 2, 3];

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = arr.reduce((accumulator, currentValue) => {
   
   
return accumulator + currentValue;
}, 0)
//let sum = 0
//for(let elem of arr) {
 //   sum += elem;
//}

// console.log('accumulator', accumulator);
//console.log(`a = ${accumulator}, c = ${currentValue} => a =  ${accumulator + currentValue}`)
console.log(sum);
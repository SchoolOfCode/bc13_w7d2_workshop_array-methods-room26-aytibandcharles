let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];


//4a. Using the .every() method, check that every number in the sevenTimesTable array is a multiple of 7.
//created a variable
//labelled function as x
// % means to divide
// line 12 means x divided by 7 should equal zero  and it should  return  true on console.
const seventimes = sevenTimesTable.every(function (x) {
    return  x % 7 === 0;
});

console.log(seventimes);
//4b. Check if every number in the seventySevenTimesTable array is a multiple of 77 using the .every() method.

const seventyseventimes = seventySevenTimesTable.every(function (x) {
    return x % 77 === 0;
});
console.log(seventyseventimes);

// 4c. Your worst fears have been confirmed. The result of step 4b showed you that there is a rogue value in your seventySevenTimesTable array.
// Use the .find() method to identify which number it is.
//going to find the rogue  number
//Created a variable
//labelled function as x
// !== means 	not equal value or type
//so if a x  integer is divided by 77 does  not equal zero.
//it should show me the rogue number

const roguenumber = seventySevenTimesTable.find(function (x) {
 return x % 77 !== 0; 
});

console.log(roguenumber);

//4d. Now that you know which number is incorrect, use the .findIndex() method to identify the index of the number.
//created a variable
//used the findIndex and labelled the function as x
// then returned x value 
// this should gives where in the array list is the rogue number.
const identifyrogueindex = seventySevenTimesTable.findIndex(function (x){
    return x === roguenumber ;
});

console.log(identifyrogueindex);
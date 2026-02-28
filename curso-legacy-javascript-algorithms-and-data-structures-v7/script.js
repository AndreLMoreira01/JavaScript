const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line
//unshift() adds the element at the beginning of the array.

myArray.unshift(["Paul", 35]);

//Shopping List
const myList = [
  ["Chocolate Bar", 15],
  ["Whey Protein Dux", 189],
  ["Creatina Growth", 45],
  ["O mundo de gelo e fogo - George R R Martin", 420],
  ["Notebook gamer MSI Cyborg", 1880],
];

//Resuable function 
function reusableFunction(){
    console.log("Hi World");
  }
  
  reusableFunction();(params) {
  
}

//Passing Values to Functions with Arguments
function functionWithArgs(number1, number2){
  var sum = number1 + number2;
  console.log(sum);
}

functionWithArgs(1, 2);

//Return a Value from a Function with Return
function timesFive(number1){
  return number1 * 5;
}

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1(myGlobal ) {
  // Assign 5 to oopsGlobal here
  // By not using let, var, or const, JS creates this on the global object
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
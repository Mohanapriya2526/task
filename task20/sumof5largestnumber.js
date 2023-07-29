const number =  [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
number.sort(function(a, b){return b - a});
let numbers =[91, 75, 69, 58, 55]
const sum = numbers.reduce((value, num) => value + num, 0);
console.log (number);
console.log ("The sum of first 5 largest numbers is : " + sum);
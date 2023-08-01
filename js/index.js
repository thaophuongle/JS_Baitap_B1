// Bai 1
var salaryPerDay = 100000;
var workingDays = 30;
console.log('Your salary is ' + workingDays*salaryPerDay);

// Bai 2
var num1 = 278;
var num2 = -673;
var num3 = 3458;
var num4 = 3432.432;
var num5 = 876;

var average = (num1 + num2 + num3 + num4 + num5)/5;
console.log('Average is ' + average);

// Bai 3
var usRate = 23500;
var usd = 3;
console.log('$3 is equal to ' + usRate*usd +'vnd');

//Bai 4
var w = 12;
var h = 24;
var p = (w + h) * 2;
console.log('p of the rectangle is ' + p);

// Bai 5
var number1 = 34;
var number2 = 65;

var unitNum1 = Math.floor(number1 % 100/10);
var tenNum1 = Math.floor(number1 % 10);
console.log('First Number Sum: ' + (unitNum1 + tenNum1));

var unitNum2 = Math.floor(number2 % 100/10);
var tenNum2 = Math.floor(number2 % 10);
console.log('Second Number Sum: ' + (unitNum2 + tenNum2));

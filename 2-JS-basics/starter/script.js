/*var firstName = 'Sarah';
console.log(firstName);

var lastName = 'Price';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

var _3years = 3;
var sarahJeanne = 'Sarah Jeanne';
//single comment
/*
So many lined comments can be put here to make jokes or to call out your coworkers.
*/

/*
Variable mutation and type coercion
*/
/*
var firstName = 'Sarah';
var age = 28;

console.log(firstName + '' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

alert(firstName + 'is a' + age + 'year old' + job + 'Is she married?' + isMarried);

age = 'twenty eight';
job = 'driver';

var lastName = prompt('What is her last Name?');
console.log(firstName + '' + lastName);
*/

//basic operators
/*var year, yearLeo, yearMark;
now = 2018;
yearLeo = now - ageLeo;
yearMark = now - ageMark;

console.log(yearLeo);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var leoOlder = ageLeo > ageMark;
console.log(leoOlder);

console.log(typeof leoOlder);
console.log(typeof ageLeo);
console.log(typeof 'Mark is older than Leo');
var x;
console.log(typeof x);

var now = 2018;
var yearLeo = 1993;
var fullAge = 26;

var isFullAge = now - yearLeo >= fullAge; */

/* var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)')
}

var isMarried = true;
if (isMarried === true){
  console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)')
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massMark / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log('Mark\ BMI is higher than John\'s.');
} else {
console.log('John\ BMI is higher than Mark\'s.');
} */

//Boolean Logic

/* let firstName = 'John';
let age = 20;

if (age < 13) {
	console.log(firstName + 'is a boy.');
} else if (age >= 13 && age < 20) {
 	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
} */

//The Ternary Operator and Switch Statements
// Ternay
// let firstName = 'John';
// let age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// let job = "instructor";
// switch (job) {
// 	case 'teacher':
// 	case 'instructor':
// 	console.log(firstName + 'teaches kids how to code.');
// 	break;
// 	case 'driver':
// 	console.log(firstName + 'drives an uber in Libson.');
// 	break;
// 	case 'designer':
// 	console.log(firstName + 'designs beautiful websites.');
// 	break;
// 	default:
// 	console.log(firstName + ' does something else.');
// }

// age = 10;
// switch (true) {
// 	case age < 13:
// 	console.log(firstName + 'is a boy.');
// 	break;
// 	case age >= 13 && age < 20:
// 	console.log(firstName + ' is a teenager.');
// 	break;
// 	case age >= 20 && age < 30:
// 	console.log(firstName + ' is a young man.');
// 	break;
// 	default:
// 	console.log(firstName + ' is a man.');
// }

//Truthy and Falsey ; (falsey) undefined, null, 0, '', Nan
// var height;

// height = 0;

// if (height || height === 0) {
// 	console.log('Variable is defined');
// } else {
// 	console.log('Varible has NOT been defined');
// }

// //Equality Operators
// if (height === '23') {
// 	console.log('The == operator does type coerction!');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var scoreJohn = (110 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// console.log(scoreJohn, scoreMike);

// if (scoreJohn > scoreMike) {
// 	console.log('John wins! with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
// 	console.log('Mike wins with ' + scoreMike + ' points');
// } else {
// 	console.log('There is a draw');
// }

//Functions

// function calculateAge(birthYear) {
// 	return 2018 - birthYear;
// }

// var ageJeremy = calculateAge(1990);
// var ageSusan = calculateAge(1970);
// var ageSarah = calculateAge(1960);

// console.log(ageJeremy, ageSarah, ageSusan);

// function yearsUntilRetirement(year, firstName) {
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;

// 	if(retirement > 0){
// 	console.log(firstName + 'retires in' + retirement + 'years');
// 	} else {
// 		console.log(`firstName is already retired.`)
// 	}
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1970, 'Susan');
// yearsUntilRetirement(1960, 'Sarah');

// function whatDoYouDo(job, firstName){}

//function expression

// var whatDoYouDo = function(job, firstName){
//  switch(job) {
// 	 case 'teacher':
// 		 return firstName + ' teaches kids how to code';
// 	 case 'driver':
// 		 return firstName + ' drives a cab in lisbon';
// 	 case 'designer':
// 		 return firstName + ' designs beautiful websites';
// 	 default:
// 		 return firstName + ' does something else';
//  }
// }

// console.log(whatDoYouDo('teacher', 'Amy'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

//arrays

//make new array
// var names = ['Amy', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// //mutated array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

//different data types
// var Ben = ['Ben', 'Smith', 1990, 'designer', 'false'];

// Ben.push('blue');
// Ben.unshift('Mr.');
// console.log(Ben);

// Ben.pop()
// Ben.pop()
// Ben.shift();
// console.log(Ben);

// console.log(Ben.indexOf(23));

// var isDesigner = Ben.indexOf('designer') === -1 ? 'Ben is NOT a designer' : 'Ben IS a designer';
// console.log(isDesigner);

// function tipCalculator(bill) {
// 	var percentage;
// 	if (bill < 50) {
// 		percentage = .2;
// 	} else if (bill >= 50 && bill < 200) {
// 		percentage = .15;
// 	} else {
// 		percentage = .1;
// 	}
// 	return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]);
// var finalValues = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];

// console.log(tips, finalValues);

//Objects + Properties 

// var sally = {
// 	firstName: "Sally",
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Emma', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false
// };

// console.log(sally.firstName);
// console.log(sally['lastName']);
// var x = 'birthYear';
// console.log(sally[x]);

// sally.job = 'designer';
// sally['isMarried'] = true;
// console.log(sally);

// var jane = new Object();
// jane.name = "Jane";
// jane.birthYear = 1998;
// jane['lastName'] = 'Smith';
// console.log(jane);

// var sally = {
// 	firstName: "Sally",
// 	lastName: 'Smith',
// 	birthYear: 1992,
// 	family: ['Jane', 'Mark', 'Emma', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function() {
// 		this.age = 2020 - this.birthYear;
// 	}
// };

// sally.age = sally.calcAge();
// console.log(sally);

// var sally = {
// 	fullName: 'Sally Smith',
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// }

// var susan = {
// 	fullName: 'Susan Lily',
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// }

// if (sally.calcBMI() > susan.calcBMI()) {
// 	console.log(sally.fullName + 'has a higher BMI of ' + sally.bmi);
// } else if (susan.bmi > sally.bmi) {
// 	console.log(susan.fullName + 'has a higher BMI of ' + susan.bmi);
// } else {
// 	console.log('They have the same BMI');
// }

//loops

// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }

// //i = 0, 0 < 10 true, log i to console,i++
// // i = 1, 1, 20 true, log i  to the console, i++

//for loop
// var ben = ['Ben', 'Smith', 1990, 'designer', 'false'];
// for (var i = 0; i < ben.length; i++) {
// 	console.log(ben[i]);
// }

// //while loop
// var i = 0;
// while(i < ben.length) {
// 	console.log(ben[i]);
// 	i++;
// }

//continue and break 
// var ben = ['Ben', 'Smith', 1990, 'designer', 'false', 'blue'];
// for (var i = 0; i < ben.length; i++) {
// 	if (typeof ben[i] !== 'string') continue;
// 	console.log(ben[i]);
// }

// for (var i = 0; i < ben.length; i++) {
// 	if (typeof ben[i] !== 'string') break;
// 	console.log(ben[i]);
// }

// for (var i = ben.length - 1; i >= 0; i--) {
// 	console.log(ben[i]);
// }

//coding challenge 5

// var john = {
// 	fullName: 'John Smith',
// 	bills: [124, 48, 268, 180, 42],
// 	calcTips: function() {
// 		this.tips = [];
// 		this.finaleValues = [];

// 		for (var i = 0; i < this.bills.length; i++)
// 		{
// 			//determine percentage based on tiping rules
// 			var percentage;
// 			var bill = this.bills[i]

// 			if(bill < 50) {
// 				percentage = .2;
// 			} else if (bill >= 50 && bill < 200) {
// 					percentage = .15;
// 				} else {
// 					pecentage = .1;
// 				}
// 			//add results to the arrays
// 			this.tips[i] = bill * percentage;
// 			this.finaleValues[i] = bill + bill * percentage;
// 		}
// 	}
// }

// var mark = {
// 	fullName: 'Mark Miller',
// 	bills: [77, 475, 110, 45],
// 	calcTips: function() {
// 		this.tips = [];
// 		this.finaleValues = [];

// 		for (var i = 0; i < this.bills.length; i++)
// 		{
// 			//determine percentage based on tiping rules
// 			var percentage;
// 			var bill = this.bills[i]

// 			if(bill < 100) {
// 				percentage = .2;
// 			} else if (bill >= 100 && bill < 300) {
// 					percentage = .15;
// 				} else {
// 					pecentage = .25;
// 				}
// 			//add results to the arrays
// 			this.tips[i] = bill * percentage;
// 			this.finaleValues[i] = bill + bill * percentage;
// 		}
// 	}
// }

// function calcAverage(tips) {
// 	var sum = 0;
// 	for (var i = 0; i < tips.length; i++) {
// 		sum = sum + tips[i];
// 	}
// 	return sum / tips.length;
// }

// //math

// john.calcTips();
// mark.calcTips();
// console.log(john, mark);

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
// 	console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
// } else if (mark.average > john.average) {
// 	console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
// }


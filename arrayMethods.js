//at()
//empty means 0 index
//-1 returns the last element
const myArr = [20, 9 ,3 ,6];
let indexAt = myArr.at();
let lastIndex = myArr.at(-1);
//console.log(indexAt);
//console.log(lastIndex);

//concat()
//joins two arrays
//returns a new array
//does not make any changes to the original arrays
const fruits = ["apple", "orange", "banana", "kiwi"];
const vegetables = ["potato", "onion", "cucumber"];
const combine = fruits.concat(myArr);
const combine2 = fruits.concat(myArr, vegetables)
//console.log(combine);
//console.log(combine2);

//constructor
//Returns function Array() {[native code]}
const makeConstructor = fruits.constructor;
console.log(makeConstructor);

//copyWithin()
//modifies the existing array
//array.copyWithin(target, start, end)
fruits.copyWithin(1,0);
//console.log(fruits);

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//console.log(fruits2.copyWithin(2, 0,2));

//entries()
//does not modify the original array
//returns array iteratrors with index as key and value pairs
let f = fruits.entries();
//console.log(f);
for(let x of f){
	//console.log(x);
}

//every()
//executes a function for each element of the array
//returns true if if it is true for each element
console.log(myArr.every(check));

function check(age){
return age>2;
}

//fill()
//fills each element with item you want
//overwrites the original array
fruits2.fill("lime");
//console.log(fruits2);

//filter()
//filter returns all the values in an array that paasses a condition given in the function
//it returns a new array
function check2(age){
return age>3;
}
let filteredAge = myArr.filter(check2);
//console.log(filteredAge);

//find()
//find returns the first element which passes the condition in the function
//does not modifies the original array
//return undefined if none passes the condition
let findAge = myArr.find(check2);
console.log(findAge);

//findIndex
//returns the index of the first element that passes the condition in the function
//does not modify the current array object
//returns -1 if no element is found
let findIndexOfAge = myArr.findIndex(check2);
console.log(findIndexOfAge);

//flat()
//to create an array with subarrays concatentaed
//depth is the parameter which tells how deep the nested array should be flattened
//default is 1
const deepArray = [1,2, [3,4], 5];
let flatArray = deepArray.flat(2);
//console.log(flatArray);
//console.log(deepArray);

//flatMap()
//method maps all the elements and creates a new flat array
//creates a anew array by calling tge function on each element of the aarray
function flatMapfunc(item){
return item*2;
}
let newArr = [1,2,5];

let flatMapArr = newArr.flatMap(flatMapfunc);
//console.log(flatMapArr);


//forEach().
//does not returns an array
//returns values separately
const numbers = [65, 44, 12, 4];
let result = numbers.forEach(forEachFunc);
document.getElementById("demo").innerHTML = numbers; 

function forEachFunc(item,index, arr){
	//console.log("item is " + item*2 + " and index is " + index);
  console.log(arr[index] = item * 10);
}
//console.log(result);


//Array.from() =>static property
//To create an array from any object that has a length property
let x = "Banana";
let xArray = Array.from("Banana");
console.log(xArray);

//includes()
//if an array contains a specific value then it returns true
//it is case sensitive
//another argument is the starting point, by default it is 0
let veg = ["potato", "tomato","peas", "brinjal","tomato"];
console.log(veg.includes("tomato", 2));

//indexOf()
//Finds the first index of the specified value
console.log(veg.indexOf("tomato"));

//isArray returns true if the object is an array
//static property
let text = "W3Schools";
const listItems = [5, [4, [7, [1]]]];
console.log(Array.isArray(text));

//split()
//it splits a string to an array
let splittedText = text.split("");
console.log(splittedText);

//join()
//it returns an array as a string
//doesnot modify the original array
let joinedText = splittedText.join("");
console.log(joinedText);
console.log(fruits.join(" and "))

//keys()
//returns array iterator objects
let keys = fruits.keys();
//or
let keys2 = Object.keys(fruits);
console.log(keys);
console.log(keys2);
for(let x of keys){
//console.log(x);
}

//lastIndexOf()
//returns index of last occurnece of an element inan array
//returns -1 if the element is not found
//it starts searching from then and moves towards the right till the beginning
console.log(veg.lastIndexOf("tomato"));

//map()
//creates a new array from calling a function for every element of that array
//does not change the original array
function multiplyByTwo(item){
	return item*2;
}

//console.log(myArr.map(multiplyByTwo));

//pop()
//removes the last element of an array
//console.log(fruits.pop());

//prototype
//adds new methods & functions to arrays
Array.prototype.multiplyBythree = function(){
let arr=[];
	for(let i=0; i<this.length; i++){
  	let x= this[i]*2;
    arr.push(x);
  }
  return arr;
}

Array.prototype.multiplyByTwo = function(){
let arr = [];
  for (let i=0;i<this.length;i++){
		let x = this[i]*2;
    arr.push(x);
    
  }
  return x;
}


//console.log(myArr.multiplyBythree());

//reduce()
//returns a single value which is functions accumulated value
//total is th initial value and num is the current value
let num = [1,2,2]
function myFunc3(total, num) {
  return total - num;
}
console.log("here" + num.reduce(myFunc3));


//reduceRight()
//similar as reduce only diff-
//applies the reduction on the array elements from right to left
let num2 = [3,3,1];
function reduceRightFunc(total,num){
	return total-num;
}

console.log(num2.reduceRight(reduceRightFunc));


//reverse()
//reverses the order of elelments ina n array
let animals = ["cat", "dog","bat"]
console.log(animals.reverse());

//shift()
//it removes the first element of the array
//it changes the original array
//returns the shifted element
const shiftedArray = [1,2,3,34];
console.log(shiftedArray.shift());
console.log(shiftedArray);

//slice()
//returns selected elements in an array as a new array
//includes the given start but not inclusive of the given end
let birds = ["sparrow", "hen", "pigeon"];
console.log(birds.slice(1,2));
console.log(birds);

//some()
//checks if the condition is true for any of the lements and stops when it gets true 
//returns false if it receives false for all the elements in the array
const items = [6,3,2,1];
function forAll(item){
	return item>5;
}
//console.log(items.some(forAll));


//sort()
//sorts strings alphabetically
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
//console.log(items.sort());

//splice()
//used to add or remove elements
//arguments- position at which item to be added, no of items to be removed, element to be added
//The method overwrites the original array
let items2 = [12,13,14,15]
//to add two items at 0 position
items2.splice(0,0,10,11);
//console.log(items2);
//to remove two items from 2 position
items2.splice(2,);
//console.log(items2);


//toString()
//It does not change the original array
//method returns a string with array values separated by commas.
//console.log(fruits5.join("").toString());

//unshift()
//adds new elements at the beginning of the array
//it overwrites the original array
const items6 = [7,8,9,10];
//console.log(items6.unshift(5,6));
//console.log(items6);

//valueOf()
//returns itself
//console.log(items6.valueOf());

//sorting strings in an array on the basis of length
const listItems2 =['first', ['second', ['third', ['fourthdemo']]]];
let y = listItems2.flat(3).sort((a,b)=> a.length-b.length);
console.log(y);










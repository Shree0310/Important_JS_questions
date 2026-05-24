//polyfill is sort of a browser fallback, in case browser does not have a certain function, and you have to write your own

//Polyfill of bind

let name = {
  firstName: "Rahul",
  lastName: "Sharma"
}
//does not work with arrow function
let printName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " is from " + hometown);
}

let printMyName = printName.bind(name);
printMyName("Dehradun");

//Inorder to make this accessible to all the functions we use Function.prototype
Function.prototype.myBind = function(...args){
  //this variable-> points to the printName function
  let obj = this;
  params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName2 = printName.myBind(name, "Dehradun");
printMyName2();

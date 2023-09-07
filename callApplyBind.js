let object = {
	Name: "Soura",
  City: "Bglr",
  getIntro: function(){
  	console.log("Name is " + this.Name + " City is " + this.City);
  }
}

let object2 = {
	Name: "Shree",
}

object2.__proto__ = object;

/* console.log(object2.Name);
console.log(object2.City);
console.log(object2.getIntro());
 */
let name = {
	firstName: "Sourashree",
  lastName: "Banerjee",
}

//name.printfullName();

let name2 ={
	firstName: "Sourabh",
  lastName: "Ganguly"
}

 printfullName = function(hometown, state){
  //each and every function in javascript has an access to this keyword
  //the this here refers to the name object
  	console.log("Full Name is " + this.firstName + " " + this.lastName +" Home town is "+ hometown + " State is " + state);
  }
//call method is used to borrow a function for example here in order to use the printfullName on name2 we will use call, it's first argument tells us where the "this" should point to
//And the second argument will be the argument that is been passed into the function
//first argument is reference to this variable
printfullName.call(name, "Bsp", "CG");

//The only difference btw call and apply methods is how we pass methods
//Instead of passing the arguments separately as in call method, in  apply method they are passed in an array list

printfullName.apply(name, ["Bhillai", "CG"]);

//Instead of directly calling the function , the bind method binds the method printfullName with an object (name2) and returns us a copy of that function,
//it returns a function to us that we can use later

let printByBind = printfullName.bind(name, "Bsp", "CG");
console.log(printByBind);
//We can invoke the method like a normal method, rather than directly invoking the code  whereever we are writing it:

printByBind();

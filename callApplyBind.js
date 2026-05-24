let name = {
  firstName: "Rahul",
  lastName: "Sharma",
  printFullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}

name.printFullName();

let name2 = {
  firstName: "Rohit",
  lastName: "Karna",
}

//We can do a function borrowing using call method
//Very usefull for borrowing functions from other methods
name.printFullName.call(name2);

//We generally have the methods outside the object
function printFullName2() {
    console.log(this.firstName + " " + this.lastName);
  }

  printFullName2.call(name2);

  //If we have more parameters in this function
  let printFullName3 = function(hometown, state) {
        console.log(this.firstName + " " + this.lastName + "is from" + hometown + state);
  }

  printFullName3.call(name, "Dehradun", "Uttarakhand");

  //Only difference btw call and apply is apply takes the second argument as a list of arguments
 
 printFullName3.apply(name, ["Dehradun", "Uttarakhand"]);

 //And bind method instead of directly calling this method, the bind method binds the method to the object and creates a copy of the function, which can be invoked later

 let printMyName =   printFullName3.bind(name, "Dehradun", "Uttarakhand");

//returns us a method which can be called later
//invoke it like a normal method
printMyName();









//Write a function that takes an array of user objects with firstName and lastName properties and returns a new array with fullName properties instead.

const users2 = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
  { id: 3, firstName: "Robert", lastName: "Johnson", email: "robert.j@example.com" },
  { id: 4, firstName: "Emily", lastName: "Williams", email: "e.williams@example.com" },
  { id: 5, firstName: "Michael", lastName: "Brown", email: "michael.b@example.com" }
];

function formatArr(users){

	if(!users || users.length === 0){
  	return null;
  }
  
  return users.map(user => {
      return {
        id: user.id,
        fullName: user.firstName + ' ' + user.lastName,
        email: user.email
      }
    }  	
  );
}

console.log(formatArr(users2));

//Creating a promise
const cart = ["shoes", "clothes", "watch"];

const promise = createOrder(cart);
console.log(promise);
//Consumer
createOrder
.then(function(orderId){
  console.log(orderId);
  return orderId;
})
.then(function(orderId){
  return proceedPayment(orderId);
})
.then(function(paymentInfo){
  console.log(paymentInfo);
})
.catch(function(err){
  console.log(err.message);
})
//We can add catch after each then and the catch checs the code written before that

function proceedPayment(orderId) {
  const pr = new Promise(function(resolve, reject) {
      resolve("payment successful");
  })
  return pr;
}

function ValidateCart(){
  return true;
}

const promise2 = createOrder(cart);

//alternate with catch placements:
createOrder
.then(function(orderId){
  console.log(orderId);
  return orderId;
})
.catch(function(err){
  console.log(err.message);
})
.then(function(orderId){
  return proceedPayment(orderId);
})
.then(function(paymentInfo){
  console.log(paymentInfo);
})
.catch(function(err){
  console.log(err.message);
})
.then(function(orderId){
  console.log("No matter what happens this will difinitely be called");
})

//Producer
function createOrder(cart) {
  const pr = new Promise(function(resolve, reject){
    //createOrder
    //ValidateCart
    //orderId
    if(!ValidateCart(cart)){
      const err = new Error("Cart is not valid");
      reject(err)
    }
    //If we get an orderId
    const orderId = "1234";
    if(orderId){
      //taking some delay here
      setTimeout(function(){
        resolve(orderId);
      },5000)
    }
  })

  return pr;
}

//We can only do resolve once, cannot do it twice, and we can only do a resolve or a reject
//attaching a callback function to the promise object (correct vocab)

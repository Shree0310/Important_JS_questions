const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

async function f2(){
	let myPromise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
  resolve("its done");
  }, 1000)
  
})
let result = await myPromise2;
}

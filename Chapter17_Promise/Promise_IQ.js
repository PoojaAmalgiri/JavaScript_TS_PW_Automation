
Promise. resolve("start")
then (function (val) {
console.log(val);
throw newError("Broke . at . step .2") ;
})
.then (function() {
console.log("This.will .NOT.run");
})
.catch(functio(err){
console.log("Caught:", err.message);

});
//array
var arr = [10,20,25,15];
//destructuring
var [a,b]=arr; 
console.log("a=",a);
console.log("b=",b);

[a,b,c] = arr;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//object
const student = {
    name:"Duc Huy",
    age:"19",
    phone:"0123456789",
    email:"duchuy@gmail..com"
}

var {name,phone} = student;
console.log("name:",name);
console.log("phone:",phone);

function restParam(num1, num2, ...num){
    console.log("num1",num1);
    console.log("num2",num2);
    console.log("Tham số còn lại",num);
    
}

//thực thi
restParam(10,20);
restParam(10,20,30,50);
restParam(1,2,3,4,5);
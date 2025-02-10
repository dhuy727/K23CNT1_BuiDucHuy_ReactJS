function varDemo(){
    var x=100; //local
}
//thực thi lệnh
varDemo();

//sử dụng x từ bên ngoài hàm
console.log("x-",x);// error x not definded
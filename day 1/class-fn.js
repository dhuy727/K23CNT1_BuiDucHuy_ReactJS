class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}


let person = new Person("Bui Duc Huy", 19);
person.setAge(20);
console.log("Tên người: " + person.getName());
console.log("Tuổi: " + person.getAge());

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); 
        this.studentId = studentId;
    }

    getStudentInfo() {
        return `Tên: ${this.getName()} - Tuổi: ${this.getAge()} - Mã SV: ${this.studentId}`;
    }
}

// Tạo đối tượng Student và kiểm tra
let student = new Student("Nguyễn Văn A", 20, "SV001");
console.log(student.getStudentInfo());

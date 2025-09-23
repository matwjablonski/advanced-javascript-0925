function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return `Hi, my name is ${this.name}, I’m ${this.age} years old.`;
}

function Student(name, age, course) {
    Person.call(this, name, age);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    return `${Person.prototype.introduce.call(this)} I study ${this.course}.`;
}

const john = new Student("John", 21, "Computer Science");
console.log(john.introduce());
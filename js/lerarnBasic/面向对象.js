// 创建对象

var arr = [1,2,3,4]
// 原型链 arr -> Array.prototype -> Object.prototype -> null

function  foo(){
    return 0;
}
console.log(foo())

// 构造函数
function  Student(name){
    this.name = name;
    // this.hello = function (){
    //     console.log("Hello,  "+ this.name + '!');
    // }
}
// 共享一个函数,
Student.prototype.hello = function (){
    console.log("Hello,  "+ this.name + '!');
}

var xiaoming = new Student('婷婷');
console.log(xiaoming.name);
xiaoming.hello();

var xiahong = new Student('饼饼');
console.log(xiahong.name);
xiahong.hello();

// 注意 在strict模式下，this.name = name将报错，因为this绑定为undefined，在非strict模式下，this.name = name不报错，因为this绑定为window，于是无意间创建了全局变量name，并且返回undefined，这个结果更糟糕。
//
// 所以，调用构造函数千万不要忘记写new

// 编程模式
function Student(props){
    this.age = props.age;
    this.name = props.name;
    this.grade = props.grade;
}

Student.prototype.hello = function (){
    console.log(this.name,this.age);
}

function createStudent(props){
    return new Student(props || {})
}

var sunbing = createStudent(
    {
        name:'饼饼',
        age:29,
        grade:100
    }
)
console.log(sunbing)

// 原型继承
function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
}
// 空函数
function  F(){

}
// 把F的原型指向Student.prototype:
F.prototype = Student.prototype

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype  = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function (){
    return this.grade;
}

//创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
console.log(xiaoming.name); // '小明'
console.log(xiaoming.grade); // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
xiaoming.__proto__.__proto__ === Student.prototype; // true
console.log(xiaoming.__proto__.__proto__ === Student.prototype);
// 验证继承关系:
console.log(xiaoming instanceof PrimaryStudent); // true
console.log(xiaoming instanceof Student); // true


/// 封装 复用
function inherits(Child,Parent){
    var F = function (){};
    F.prototype = Parent.prototype;
    Child.prototype = new  F();
    Child.prototype.constructor  = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// ES6 语法新特性  class
class Teacher {
    constructor(name) {
        this.name = name;
    }
    hello(){
        console.log("hello, "+this.name);
    }
}
var bingbing = new Teacher('bing');
bingbing.hello();

class  PrimaryTeacher extends Teacher{
    constructor(name,grade) {
        super(name);// 调用父类构造方法, 否则父类的那么无法初始化
        this.grade = grade;

    }
    myGrade(){
        console.log("I'am at grade "+this.grade+' my name is '+this.name);
    }
}
var b = new PrimaryTeacher('ting',89);
b.hello();
b.myGrade();

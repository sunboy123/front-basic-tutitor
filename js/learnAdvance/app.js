let friendsOne = ["Mike","Sunbing","Weizheng","HaHa"]
let friendsTwo = ["Kite","Ting","wangwu","zhangsan","KKK","Kiim"]

/**
 * 数组合并直接相加会得到的结果是一个字符串
 * 使用concat 进行数组合并
 */
console.log(typeof (friendsOne + friendsTwo));
console.log(friendsTwo.concat(friendsOne))

console.log(typeof Infinity, typeof NaN)

console.log((5/"1"),5/0)
console.log(Infinity * 5,Infinity/Infinity)
console.log(NaN===NaN)
console.log(isNaN(0/0))

let aList = [1,2,5,3,7,9,0,3,56,12,-1]
console.log(Math.max(...aList))

/**
 * spread operator
 * 改造一个多参数输入的函数
 */
function  findBiggest(...number){
    console.log(number)
    let biggest = -Infinity;
    number.forEach((n,index) => {
        // console.log(index,n)
        if (n>biggest){
            biggest = n;
        }
    })
    return biggest
}

bNumber = findBiggest(-1,-3,5,6,8,4)
console.log(bNumber)

let  friends = [...friendsOne,...friendsTwo]
console.log(friends)

/**
 * Primitive Data Type 原始数据类型
 * Reference Data Type  引用数据类型
 */

let friendsThree = friendsTwo;
console.log(friendsTwo)
friendsTwo.push("Make")
console.log(friendsThree,friendsTwo)


// string 在存在corecion 会在使用方法瞬间进行强制转换为object
console.log(Array.isArray(friends))
// Map 函数的使用 函数切记return
let friendsUpper = friends.map((i)=>{
    return i.toUpperCase()
})
console.log(friendsUpper)

let friendFilter = friends.filter((i)=>{
    return i.startsWith('K')
})
console.log(friendFilter)

let friendFind = friends.some((i)=>{
    return i.endsWith('K')
})
console.log(friendFind)
friends.sort() // 改变原数组的排列顺序
console.log(friends)

let numbers = [2,1,5,4,3,8,5,9,10,6]

numbers.sort((a,b)=>{
    return a-b;
})
console.log(numbers)

for (let n of numbers){
    console.log(n);
}

let testString = "sunbinbg";
for (let i of testString){
    console.log(i)
}
// 枚举遍历
for (let  i in testString){
    console.log(i,testString[i])
}


// let const
// initializer 初始化
// re-declaration
// re-assignment

//

let x;
const a = 10;

var  b = 10;
console.log(b)

sayHi();

function  sayHi(){
    console.log("hi")
}

// hi()
// const hi = ()=>{
//     console.log("hi")
// }

// 作用域
let name = "Bingbing"
function hello() {
    let name = "Sunboy";
    console.log(name+" is a good boy!!");
    function helloOne() {
        console.log(name+" is a good boy again!!");
    }
    helloOne();
}
hello()

function f1(){
    console.log("this is f1.")
    f2();
    function f2 () {
        console.log("this is f2")
        f3();
        function f3() {
            console.log("this is f3")

        }
    }

}
f1();

// constrctor
function Peron(name,age,height,weight) {
    this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
}

Peron.prototype.say = function() {
    console.log(this.name+", love jesus!!")
}

Peron.prototype.intro = function () {
    console.log(this.name+", love money")
}

let Wilson = new Peron("Wilson",26,170,180)
let Tutu = new Peron("TuTu",24,169,90)
let Niuniu = new Peron("Niuniu",22,160,90)

Wilson.say()
Tutu.say()
Niuniu.intro()
console.log(Wilson.say == Tutu.say)
console.log(Tutu)

// bind , call , apply
let Sunbing = {
    name:"bingbing",
    age:25
}

// 带参数
function getAge(country){
    console.log(this)
    console.log(this.age)
    console.log("I am from "+country)
}

// 需要使用变量来接着
// let getBingAge = getAge.bind(Sunbing)
// getBingAge()

getAge.call(Sunbing,"Beijing")

// apply 取决于参数，apply 使用array 来保存， call 使用单个参数

function Student(name,age,height,weight,major,grade){
    Peron.call(this,name,age,height,weight); // 继承初始化
    this.major = major,
    this.grade = grade
}

// 继承方法比较好的做法
Student.prototype = Object.create(Peron.prototype)
Student.prototype.study = function (){
    console.log(this.name +" sutding math!")
}

let su = new Student("maomao",18,179,180,"CS",3.85)

console.log(su)
su.say()
su.intro()
su.study()


class  Person{
    constructor(name,age,height,weight) {
        this.name = name,
            this.age = age,
            this.height = height,
            this.weight = weight
    }
    say() {
        console.log(this.name+", love jesus!!")
    }

    intro(){
        console.log(this.name+", love money")
    }
}
let Wilson1 = new Person("Wilson",26,170,180)
console.log(Wilson1)


class Student1 extends  Person{
    constructor(name,age,height,weight,major,grade) {
        super(name,age,height,weight);
        this.major = major,
            this.grade = grade
    }
    study(){
        console.log(this.name +" sutding math!")
    }
}
let bin = new Student1("bingbing",23,45,56,"CS",0.56)
console.log(bin)


// 静态属性和方法
class Circle{
    static pi = 3.1415926
    constructor(radius) {
        this.radius = radius
    }
    getArea(){
        return Circle.pi * this.radius * this.radius
    }
    getPerimeter(){
        return 2*3.14*this.radius
    }
    static getAreaFormula(){
        console.log("r*r*PI")
    }
}

let circle = new Circle(0.5)
console.log(circle.getArea())
console.log(Circle.getAreaFormula())
/**
 * 如何复制一个独立的数组
 * 使用[...variable] 或者直接使用[var1,var2,....]
 * @type {string[]}
 */
let boyFriend = ["wangfeng","zhangshan","wangwu"]
let copy = [...boyFriend];

copy.push("hhhh")
console.log(boyFriend,copy)

/**
 * 三元操作运算符 (条件) ? 结果为true:(条件)?结果为true:结果为false  => 其实就是if 条件判断的合并写法语法糖
 */
let age = 30;
let price = (age<18) ? 50 : 100;
console.log(price)
let price2 = (age < 18)?50:(age < 50)?40:75
console.log(price2)
/**
 *  默认参数
 */
function f(a= 2,b= 4){
    console.log(a*b)
}
f()

console.log(`I am ${age} year old!!`)

/**
 * switch 用法
 */
let input = prompt("enter a month")
// if (input== "Jan"){
//     console.log("一月")
// }else if (input == "Feb"){
//     console.log("二月")
// }

switch (input){
    case "Jan":
        console.log("一月")
        break
    case "Feb":
        console.log("二月")
        break
    case  "Mar":
        console.log("三月")
        break
    case "four":
        console.log("四月")
        break
    case "June":
        console.log("六月")
        break
    default:
        console.log("请输入正确的月份简写")
}
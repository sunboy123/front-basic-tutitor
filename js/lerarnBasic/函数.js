//函数的定义 多种方式

function abs(x){
    if (x>=0){
        return x;
    }else {
        return  -x;
    }
}

var a = -1;
var b = abs(a);
console.log(b)

// 匿名函数的使用
var absNew = function (x){
    if (x>=0){
        return x;
    }else {
        return  -x;
    }
}
console.log(absNew(-2))

// arguments 参数
function foo(x) {
    // console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
console.log(abs())
console.log(abs(2))
console.log(abs(-19999))

// rest 参数
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
foo(3, 4);

// var i, args = [];
// for (i=1; i<=100; i++) {
//     args.push(i);
// }

// 切记注意换行问题，会自动加载分号；
console.log('---------------------------')
// 变量的作用域
// 从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
}

foo();
console.log('11111')

// 变量提升
function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
    var x = 'Hello, ' + y;
    console.log(x);
}

foo();

// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
console.log(MYAPP)

// 局部作用域使用let 或者 const
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError: 使用var 的时候就是正常的
    // i += 1;
    console.log(sum);
    // console.log(i);
}
foo()

//解构赋值 需要浏览器支持
var array = ['hello', 'JavaScript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];

var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
console.log(x,y,z);

let [, , g] = ['hello', 'JavaScript', 'ES6'];
console.log(g);

// 从对象中快速取属性
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
console.log(name,age,passport);

var x=1, y=2;;
[x, y] = [y, x];
console.log(x,y);

function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}

let curTime = buildDate({year:2017,month:1,day:4,hour:10,minute:30,second:30});
console.log(curTime);

//使用解构赋值可以减少代码量，但是，需要在支持ES6解构赋值特性的现代浏览器中才能正常运行

// 方法
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        // this 始终指向当前的对象
        return y - this.birth;
    }
};
console.log(xiaoming.age);
console.log(xiaoming.age());

// 拆分
function getAge() {
    var y = new  Date().getFullYear();
    return y-this.birth;
}
var xiaohong = {
    name: "xiaohong",
    birth: 1986,
    age:getAge
};
console.log(xiaohong.age());
// 为了避免 this 指向设计错误，我们使用apply 来控制this的指向; 当然也可以使用call

/*
另一个与apply()类似的方法是call()，唯一区别是：
apply()把参数打包成Array再传入；
call()把参数按顺序传入。
 */

console.log(getAge.apply(xiaohong,[]));

console.log(getAge.call(xiaohong,[]));

console.log(Math.max.call(null,1,3,4,5,6))
console.log(Math.max.apply(null,[1,3,4,5,6]))

// 装饰器 暂时没看懂！！！！
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3


// 函数作为返回值

function arraySum(arr){
    return arr.reduce((x,y) => {return x+y})
}

var arr = [1,2,3,4,5,6]
console.log(arraySum(arr))

// 懒加载模式需要的时候用不需要的时候不计算
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}

var f = lazy_sum(arr)
console.log(f)
// 调用是计算
console.log(f())

// 闭包
/*
注意到返回的函数在其定义内部引用了局部变量arr，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。
另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了f()才执行

返回函数不要引用任何循环变量，或者后续会发生变化的变量。
*/

// function count() {
//     var arr = [];
//     // 块作用域 使用let 不使用var
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }

//如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变
//创建一个匿名函数并立刻执行
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {return n * n;}
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(),f2(),f3())

// 面向对象创建创建计时器

function create_counter(initial) {
    var x  = initial || 0;
    return {
        inc:function (){
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log(c1.inc()); // 1
console.log(c1.inc()); // 2
console.log(c1.inc()); // 3

var c2 = create_counter(10);
console.log(c2.inc()); // 11
console.log(c2.inc()); // 12
console.log(c2.inc()); // 13


// 闭包函数 闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。

// 使用闭包函数实现一个 幂次方
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343



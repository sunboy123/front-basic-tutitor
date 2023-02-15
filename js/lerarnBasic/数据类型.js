// 数据类型
// Number
var a = 123;
var b = 10 % 3;
console.log(b)

//字符串 与python 用法一致

//布尔值
console.log(2>=3);

//比较运算符

console.log(1===1);
if (isNaN(NaN)){
    console.log('your are right!')
}
// null undefined

//数组 创建的两种方法
var arr = [1,2,3,4,"hello",null,true,false];
console.log(arr)
var aa = new Array(1,2,3,"sunbing","weizheng",null,false,true);
console.log(aa)
//对象
var peroson = {
    name:"bob",
    age:20,
    tags:['js','python','mobile'],
    hasCar:true,
    zipCode:null
};
console.log(typeof peroson);
console.log(peroson.age);
//变量
var x = 10;
x += 10;
console.log(x)
// 'use strict';
// abc = 'test';
// console.log(abc)
// stric 模式

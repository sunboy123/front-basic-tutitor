// js 对象； {} 表示对象
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

console.log(xiaoming.name);

// 注意有效变量名的使用 需要使用''引起来， 访问的时候使用['']不能使用点语法来使用
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
console.log(xiaohong)

// 可以动态的来添加属性和删除属性
delete xiaohong["middle-school"]
xiaohong.grilfriend = 'tingintg';
console.log(xiaohong)

// 判断属性是否存在， 注意继承的问题
if ('grilfriend' in xiaohong) {
    console.log("exists!!")

}else {
    console.log('don\'t exists!!')
}

if (xiaohong.hasOwnProperty('name')){
    console.log(xiaohong.name)
}
else {
    console.log('no!!!')
}

// 判断条件的写法
var age = 3;
if (age >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}

// 循环
var  x = 0;
var i ;
for (i=1;i<=100;i++){
    x += i;

}
console.log(x)

// 注意循环的条件
var x = 0;
for (;;){
    if (x>=100){
        console.log('max x is 100!! ' + x)
        break
    }
    x ++;
}

for (var obj in xiaohong){
    console.log(obj)
}
// for in 数组得到的是String 并不是 Number
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
console.log(x)

var  n = 1;

do {
    n += 1;
    console.log(n)
}
while (n < 100)

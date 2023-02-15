// map 和set 字典和集合

var m = new Map();
var n = new Set();

var x = new Map([
    ['1','2'],
    ['3','4'],
    ['5','6']
])
console.log(x)
console.log(x.get('1'))
console.log(x.has('9'))
x.set('8','9')
console.log(x)

var s1 = new Set(
    [1,3,4,5,'6','6',4]
)
console.log(s1)
s1.delete(4)
console.log(s1)

// iterable 可迭代的对象 for of 遍历集合
var a = [1,2,3,4]
for (var x1 of a) {
    console.log(x1)
}

var x1 = new Set(['a','b','c'])
var x2 = new Map([['1','2'],['3','4']])

for (var xa of x1) {
    console.log(xa)
}

for (var xb of x2) {
    console.log(xb[0]+'='+xb[1])
}
// 数组
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});
// 集合
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

// Map
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});
// 只打印关键参数
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});
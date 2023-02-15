// map / reduce

// map  和 python 中的map用法类似，或者是lamda 表达式
 function pow(x) {
    return x*x;
}
var arr = [1,2,3,4,5];
var results = arr.map(pow);
console.log(results);

// 直接转数组元素为字符串
console.log(arr.map(String));
// console.log(arr);

// reduce
// [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
var xx = arr.reduce(function (x, y) {
    return x * y;
}); // 25
console.log(xx);

// 数组转换为Number
var yy = arr.reduce(function (x, y) {
    return 10 * x + y;
}); // 25
console.log(yy);

// Number-> Array
function string2int(s) {
    var a = []
    if (s == '0'){
        return 0;
    }else {

    }
}

function string2int(str) {
    let arr = str.split('').map(e => e * 1);
    console.log(arr);
    return arr.reduce((prev, curr) => {
        return prev * 10 + curr
    })
}
var zz = arr.reduce(function (x, y) {
    return 10 * x + y;
}); // 25
console.log(yy);


// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}

function normalize(arr){
    return arr.map(name => name[0].toLocaleUpperCase()+name.substring(1).toLocaleLowerCase())
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

var arr = ['1', '2', '3'];
var r;
r = arr.map(str => parseInt(str));
r1 = arr.map(Number)
r2 = arr.map(parseInt)
console.log(r,r1,r2)

// 如果包含不返回的情况就是undefined
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
    if (index < 3) {
        return num
    }else {
        return null
    }
})
console.log(filteredNumbers)

// filter 的使用方法
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log("使用filter 语法筛选 ",r)

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
const a = arr.filter(s=> s&&s.trim())
const b = arr.filter(function (s) {return s&&s.trim()})
console.log('筛选调为空的字符串',a,b);
console.log('============================================================================')

//filter 接收回调函数
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r;
r = arr.filter((element,index,self) => {return self.indexOf(element) == index})
console.log(r)

// 筛选素数

function get_primes(arr){
    // 素数只能呗1和本身整除
    return arr.filter(function (x) {
        let i;
        for (i=2;i<=Math.sqrt(x);i++){ // sqrt 减少计算次数，优化速度
            if (x % i === 0){
                return 0
            }
        }
        return x!=1?1:0;
    })

}
// 测试:
var x, r, arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
console.log(r);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}

// sort 排序
// 看上去正常的结果:
['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
let aa = [10, 20, 1, 2].sort(); // [1, 10, 2, 20]
console.log('aa',aa)

// Array  的sort 方法 是吧元素都转成String 在进行排序，排序的规则是，根据acsii码的规则来进行的
// 对改写 对sort 进行比较函数
var test_arr =  [10, 20, 1, 2]
console.log('111111',test_arr.sort((x,y) => -(x-y)))
test_arr.sort((x,y)=>{
    if (x<y){
        return -1;
    }
    if (x>y){
        return 1
    }
    return 0
});
console.log('test_arr',test_arr)
// 倒序 顺序颠倒就行
var test_arr =  [10, 20, 1, 2]
test_arr.sort((x,y)=>{
    if (x>y){
        return -1
    }
    if (x<y){
        return 1;
    }
    return 0
});

console.log('reserved_test_arr',test_arr)

// Array 数组，
// 数组操作 有map reduce filter sort

var arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
})); // true, 因为每个元素都满足s.length>0

console.log(arr.every(function (s) {
    return s.toLowerCase() === s;
}));

// find 返回满足要求的第一个元素
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
}));

// findIndex 返回索引， 如果招不到
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
}));

//forEach 可以直接遍历数组
arr.forEach(console.log)

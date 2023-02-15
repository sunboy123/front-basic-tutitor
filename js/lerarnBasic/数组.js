//
var arr = [1,2,3,4,5,6]
arr[2] = 88;
console.log(arr.length)

console.log(arr.indexOf(6));

//slice
console.log(arr.slice(1,6))

// push pop

// unshift shift

var arr = [1,2];
arr.unshift('a','b','c');
console.log(arr);
arr.shift();
console.log(arr);
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

// splice
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
console.log(arr);
arr.splice(2,3,'google','facebook');
console.log(arr)
var arr1 = [1,2,3,4];
var bb = arr.concat(arr1);
console.log(bb);
console.log(arr1)
console.log(arr1.join('-'))
var arrxx = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arrxx);
console.log(arrxx[1][1])

// 遍历 数组
for (const arrxxKey in arrxx) {
    console.log(arrxx[arrxxKey])
}
/**
 * 数组翻转
 * @type {string[]}
 */
const friends = ["Harry", "Ron", "Snap"];
const reversed_friends = [];

for (let i = friends.length-1;i>=0;i--) {
    console.log(friends[i])
    reversed_friends.push(friends[i])

}
console.log(reversed_friends)

/**
 *
 * @param arr
 * @returns {*}
 */
function findBiggest(arr) {
    if (arr){
    return [Math.max(...arr),Math.min(...arr)]

    }else {
        return undefined
    }
}

function findBigNumber(arr){
    // 不停的比较两个数的大小
    if (arr.length == 0 ){
        return undefined
    }

    let bigNumber = -1000000;
    for (let i =0;i<arr.length;i++){
        if (arr[i] > bigNumber){
            console.log(bigNumber)
            bigNumber = arr[i]
        }
    }
    return bigNumber
}

arr = [15,20,56,78,90]
// console.log(Math.max(...arr))
x = findBiggest(arr)
console.log(x)
console.log(findBigNumber(arr))

/**
 * add Up to a Number
 *
 */
function addUpNumber(n){
    if (n<0){
        console.log("请输入大于0的正整数")
    }else {
        let sumNumber = 0
        for(let i = 0;i<=n;i++){
            sumNumber += i;
        }
        console.log("计算数据的总和是: "+sumNumber)
        return sumNumber
    }
}

function addTwoUpper(n){
    let result = ((1+n) * n)/2
    return result
}

console.log(addTwoUpper(100))
addUpNumber(100)


let arrList = [1,3,65,2,10,9,45,34,84,77,105]

/**
 * 冒泡排序
 * 比较相邻两个元素的大小，小或者大就互换位置
 */

/**
 * 第一种方法实现while
 * @param arr
 * @returns {*}
 * @constructor
 */
function MPSort(arr) {
    let i = arr.length;
    //存储临时变量
    let temp;
    while (i > 0) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    }
    return arr;
}

console.log(MPSort(arrList));

/**
 * 方法二实现forEach
 * @param arr
 * @constructor
 */

function MPSortEach(arr){
    arr.forEach(() => {
        let i = arr.length;
        let temp;
        if (i>0){
            for (let j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            i--;
        }

    })
    return arr
}
console.log(MPSortEach(arrList));


/**
 * 归并排序的算法
 * n*log2n 次数
 * 思路,分组比较，然后合并在进行分组比较； 采取的是分治法的思路
 */
function MergeTime(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth) ){
            result.push(arr2[j]);
            j++;
        }else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth) ){
            result.push(arr1[i])
            i++;
        }else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)){
            if (Number(arr1[i].todoDate) > Number(arr2[j].todoDate)){
                result.push(arr2[j]);
                j++;
            }else{
                result.push(arr1[i]);
                i++;
            }
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while (j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
}

function MergeSort(arr){
    if (arr.length == 1){
        return arr
    }else{
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0,middle);
        let right = arr.slice(middle,arr.length)
        console.log(1111111,left,right)
        return MergeTime(MergeSort(left), MergeSort(right)); // 递归分组
    }
     
}

console.log('xxxxxx',MergeSort(arrList))
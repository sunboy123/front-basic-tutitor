### js 的基本函数

console.log() 函数打印
alert() 网页提示
prompt 提示输入

prompt("请输入年龄:") 

#### 变量 variable
let ,var , const
const 名叫常量，不可改变

let， const 同一名称的变量只申明一次
const 常量无法改变
var 使用会造成一些问题
// let a = 1;
// const b = 1;
// console.log(a)
// console.log(b)
// a = 2;

// console.log(a);
// b = 4;  error
// console.log(b) 

### 数值操作
一、 数值运算
加减乘除
二、特殊运算符号
1、remainder 余数 
5/2 = 2....1
5 % 2 = 1 取余
2、power 代表乘方
2**10
3、++ --
  x++ -> x=x+1
4、+=   

### 字符串 Strings
文字string
数字string
concat 字符串拼接

### Primitive Data Types 基本数据类型
Number, String, Boolean ,Underfined, Null, Symbol
Number
1、toString() toFixed
String 常用的操作方法
1、length()
2、retrieve()
3、slice()
4、indexOf()  
5、toLowerCase()
6、toUpperCase()
7、split()

### undefined null 0
undefined 代表是待赋值
null 设置为空

###逻辑运算符
== 比较  等号左右的值不关心类型 !=
===  比较值和；类型 !==

isNaN(age)来判断是否为空
下面都是为false的情况
false
0
""空字符串
null
undefined
NaN

#### 变量命名法则
camelCase 驼峰式命名法则
underline 下划线
const with uppsercase 常量大写

变量名限制： 在html无限制
1、start with number 不能以数字开头
2、hyphen in js 连字符不能出现在js中

### Array 数组
方法： index、length、push、pop、shift、unshift
push、ppo 在尾部做增减
shift、unshift 在头部做增减

### Functions 函数
### object 对象
属性 property
方法 method
this 代指object对象本身

- OOP 一个object是另外的一个object的属性
- Array 是一个特俗的对象，，
Loop 循环遍历，
  for loop
  while loop
  eg:
  for (let i=0 ; i < friends.length; i++){
  console.log(friends[i])
  }

  let j = 0;
  while (j<=10){
  console.log(j);
  j++;
  }
  
  控制循环终结或者继续的关键字
  continue
  break
- Nested loop
  在loop中还有loop
  
- 遍历数组

### DOM  
document 文档 object model 
js 操作 html 

- window object
  alert()
  addEventListener()
  prompt()
  setInterval(sayHi,5)
  clearInterval()

- window properties 都是object
  console 
  Document
  Local
  
#### 函数function
```
/**
 * 箭头函数
 */
//普通函数 可以实现先执行后定义这个是个特殊的用法
// function sayHi(){
//     console.log("Hi")
// }
// 箭头函数

let  sayHi = (name) => {
    console.log("hi "+name)
}
sayHi("tingting")

/*
this 的用法
 */

let  tmp = {
    name:'sunbing ',

    love(){
        console.log("i love tingting")
    },
    //箭头函数 其中的this 是指window object
    walk:() => {
        console.log(this)
        console.log(this.name +" am walking!!!")
    }
}

console.log(tmp.walk())

/*
*forEach 用法
 */
let luckNumbers = [7,5,7,8,9,0,23,45,67,78,98.89]
luckNumbers.forEach(
   checkNumber
);
function checkNumber(n){
    if (n>20){
        console.log(n);
    }
}

//匿名函数方式
luckNumbers.forEach(
    function (n,index){
        if (n>20){
            console.log(n+" is index at "+index);
        }
    }
);

// 直接使用 循环遍历
for(let i =0;i<luckNumbers.length;i++){
    n = luckNumbers[i];
    if (n>20){
        console.log(n);
    }
}

// 直接使用箭头函数,当多个参数的时候需要使用小括号，forEach函数又n,index,arr三个参数
luckNumbers.forEach(
    n => {
        if (n > 20) {
            console.log(n);
        }
    }
);

```

-DOM  document object model 网页结构

dom中每一个HTML 的element都是对象，都有属性和方法
dom的方法
getElementById
getElementsByClassName
addEventListener()

***NodeList 不是一个array***

#### Array HTMLCollection NodeList 之间的区别
Array: index,length, pop ,push , unshift, shift
HTMLCollection: 获取到同一html的元素的所有集合
NodeList:通过selector 获取到的集合list ，但是区别于array

HTMLCollection、 NodeList的相同点： 
1、拥有length 属性
2、都有index

***NodeList、Array 可以使用forEach 方法 HTMLCollection不可以***
### Element Object
1、children => HTMLCollection
2、childNodes => NodeList

3、innerTHML/ innerText : 动态修改element的文本内容 两者之间的不同点一个可以加标签一个是纯文本
4、appendChild() parentElement 附件 childElement
5、classList:DOMTokenList  更方便的访问元素类列表
5-1 add()/remove()/toggle()/contains()
6、getAttribute() <=> property 
object 拥有 属性：自身属性 property 和 设置属性 attribute （不同名称） 两种方法是一样的
           行为: 方法、函数 method 和 function （不同名称） 两种方法是一样的

#### inheritance 继承 
1、不同的html element 可能有他自己的方法和属性
2、从父类继承属性和方法

### JS Event 事件
- 事件发生是需要被监听 eventListener
- addEventListerner(event type, callback) 适用于 window object 和element object
event type (resize, scroll, click)
  
callback function -参数event 或者e
例子：
```
/**
 * addEventListener
 * e 或者 event 代表动作对象
 * preventDefault()代表禁止提交
 * parentElement() 寻找父元素
 */
// window.addEventListener("click",e=>{
//     console.log(e);
//     console.log(typeof e)
// })


let hh1 = document.querySelector("h1")
hh1.addEventListener("click",e=>{
    console.log(e.target.innerHTML)
    console.log(e.target.parentElement.parentElement)
})

let button = document.querySelector("button.submit")
button.addEventListener("click",e=>{
    e.preventDefault() // 
})
```
### style object
1、是element object的属性
2、控制html css 样式的对象
3、不允许出现连字符，因此js的中的css 使用驼峰式命名方式书写
```
两种不同的写法
button.style.backgroundColor = "black"
button.style.color = "white"



button.style = "background-color:black; color:red; "
button.style = "" //清空style

```
### Dynamic Header 动态header
- window.pageYOffset property
- scroll event 
- style object

### Event Bubbling 
嵌套的element 之间存在 事件依赖，例如嵌套的div 发生点击事件，子div的事件会引发父div的事件的现象叫做event bubbling
解决event bubbling的方法有使用stopPropagation() ；停止事件的扩散！！

### Storage 浏览器端存储数据
- 存在本地浏览器
- key-value对存储格式，键值是字符串型

Local Storege and Session Store
  - method
  - 1、setItem(key,value)
  - 2、getItem(key)
  - 3、removeItem(key)
  - 4、clear()

Session Storage  当浏览器被关闭的时候会清空
Local Storage 里面存储的数据是没有过期时间的，手动关闭之后打开同样的网页数据还存在，需要手动清空才会清空

Storage can only store string!!! 只能存储字符串 js 会自动将数据类型转存为string
- 使用json 来存储 其他类型的数据
JSON.stringfy()/ JSON.parse() 来数组转换为string，解析出来
  
<script> 放在最后的原因是，网站需要先加载出来html 和css 然后js才能操作dom，其次js 加载比较耗时所以会先展示文字样式最后展示js渲染数据</script>

### Js 高级用法
- 数组
  1、两个数组直接拼接 得到的是一个字符串，可以是使用concat 来合并两个数组
  
- NaN（not a number data type） Infinity（无限大） 都是Number 类型
  - 不同类型的数据做operate的时候会出现这个问题
  ... 函数
    Math.max(...)
  
- Primitive Data Type 原始数据类型 
  - 不是object 没有属性和方法
  - 值类型不是引用类型 
  
- Reference Data Type  引用数据类型
  - Object 和 array
  - 变量指向 内存地址

```
1、 tring  是原始数据类型在存在corecion 会在使用方法瞬间进行强制转换为object；
2、 字符串比较大小会比较字符串的第一个字符
3、 判断数组是否是数组,使用Array.isArray()
```

Array 相关的知识
- Map 函数 将参数和方法进行映射
- Filter 返回所有符合条件的元素 是个数组 empty []
- Find 返回第一个数组元素  如果未找到符合条件的就会返回undefined
- some\ervery 去检测是否存在或者全部存在 这种情况
- sort 排序字符串排序： sort(()=>{})
循环遍历：
  for of loop 只能使用在可迭代对象中；不能遍历object
  for in loop 可以遍历对象的属性以及可迭代对象

#### JS 高级OOP
1、 global execution context 全局执行环境
2、function execution context 函数执行环境

js执行流程 ： 创建时期和执行时期
创建时期: 实例化window（函数执行环境无此项）、创建scope chain 、产生this对象指向window object、内存开辟申明函数变量、
var 变量名的内存空间（并挂起存储）但是不会分配给let const 函数表达式内存空间
```
const hi = ()=>{
console.log("hi")
}
```

执行时期: 一行一行执行代码根据调用栈
let 不需要初始赋值，但是const 需要初始化的赋值
3、scope 作用域  
- global scope 全局作用域
- function scope 函数作用域
- block scope 块作用域 在for loop中 或者 if statement, const & let 拥有block scope 但是 var 没有
4、closure 闭包； 闭包作用域取决于函数被申明时候所在的位置
  5、调用栈CallStack 是一种数据结构
  stack LIFO last in first out 后进先出的顺序
  JS 是单线程的
  
5、 object 
- constructor function  制作大量相似的object
- 1、以大写字母开始； 使用new 关键词 创建
6、 Prototype  对象原型 ,原型链
  Bind, Call, Apply 函数对象
  bind 绑定 
  call 调用
  apply 取决于参数，apply 使用array 来保存， call 使用单个参数
  ```
  // bind , call , apply
  let Sunbing = {
  name:"bingbing",
  age:25
  }
  
  // 带参数
  function getAge(country,height){
  console.log(this)
  console.log(this.age)
  console.log("I am from "+country + "; and " + this.height)
  }
  
  // 需要使用变量来接着
  // let getBingAge = getAge.bind(Sunbing)
  // getBingAge()
  
  getAge.call(Sunbing,"Beijing")
  getAge.call(Sunbing,["Beijing",176])
  ```
7、 继承
  ```function Student(name,age,height,weight,major,grade){
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

```
8、类· class
9、静态属性和方法 使用static 关键字

#### JS 高阶3
1、如何复制一个Array 
array = [...variable]
2、三元运算符; ternary operator
/**
* 三元操作运算符 (条件) ? 结果为true:(条件)?结果为true:结果为false  => 其实就是if 条件判断的合并写法语法糖
  */
  let age = 30;
  let price = (age<18) ? 50 : 100;
  console.log(price)
  let price2 = (age < 18)?50:(age < 50)?40:75
  console.log(price2)
3、函数的默认参数 同python 语法一致
  
4、字符串back-tick
`${variable} say hi.`
5、强类型弱类型语言
6、 浮点数精度不精确的问题 判断会出现false 比如0.3+0.2=0.5 可以使用toFixed 的方法
7、立即执行函数（函数）（参数） 直接执行 IIFE
8、destructing an object 将属性从对象中取出来
  eg: let {age,name} = willson; 代替 let age = willson.age此种比较复杂的用法
9、switch 用法，在使用中的多个条件的判断中比较容易阅读但是每个条件都必须有break 关键字

### ajax 与api进行交互
同步代码sync
异步代码async
callback hell 回调地狱，代码量比较大的时候会出现代码的嵌套层级增多无法阅读的问题
Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。





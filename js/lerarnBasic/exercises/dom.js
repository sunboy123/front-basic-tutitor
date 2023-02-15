// console.log(window)

/*
*一个object 对象 是另外一个object的对象
*
 */

let  bing = {
    name:'sunbing ',
    // spouse:tingTing,
    love(){
        console.log("i love tingting")
    }
}

let  tingTing = {
    name:'laing ting',
    spouse:bing,
    love(){
        console.log("i  love flowers")
    }
}

console.log(tingTing)
tingTing.spouse.love()

/**
 * 操作dom树
 * getElementById、getElementByClassName
 */
let h1 = document.getElementById("first")
let p = document.getElementsByClassName("second")
console.log(h1)
console.log(p)

console.log("====================================================")
let seconds = document.querySelectorAll(".second")
// console.log(seconds)
seconds.forEach(
    tag => {
        console.log(tag)
    }
)
// console.log(seconds.length)
// console.log(seconds[1])

console.log('====================================================')
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

// children childNodes

let body = document.querySelector("body")
console.log(body.children)
console.log(body.childNodes)
console.log(body.parentElement)

let pp = document.querySelector('p.first')
console.log(pp)
console.log(pp.parentElement)
console.log(pp.parentNode)

/*
*innHTML
* innerText
 */
let h1H = document.querySelector('h1.first')
h1H.innerHTML = "<mark>This is first h1</mark>"
// h1H.innerText = "This is first xxx"
console.log(h1H)

let body1 = document.querySelector('body')
let myH2 = document.createElement("h2");
myH2.innerText = "Hi , i am sunbing";
body1.appendChild(myH2)

/**
 * classList:DOMTokenList  更方便的访问元素类列表
 * @type {HTMLParagraphElement}
 */
let randomP = document.querySelector('p#new')
console.log(randomP.classList)
randomP.classList.add("red");
randomP.classList.add("bold")
randomP.classList.remove("red")
randomP.classList.toggle("blue")
xx = randomP.classList.contains("blue")
console.log(xx)

/**
 * getAttribyute 获取属性
 */
let  a = document.querySelector('a')
console.log(a.getAttribute("title"))
console.log(a.getAttribute("href"))

/*
*
* querySelectorAll()
 */
let allP = document.querySelectorAll("p")
allP.forEach(element=>{
    element.classList.add("red")
    element.classList.add("bold")
})

let sections = document.querySelector("section")
let redp = sections.querySelectorAll("p.red")
console.log(redp)


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
console.log(typeof button.style)
// button.style.backgroundColor = "black"
// button.style.color = "white"
button.style = "background-color:black; color:red; "
button.style = ""
button.addEventListener("click",e=>{
    e.preventDefault() //
})
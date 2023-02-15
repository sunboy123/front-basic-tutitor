let a = document.querySelector("div.a")
let b = document.querySelector("div.b")

a.addEventListener("click", e=>{
    console.log("a's event listener's clicked!!")
})

b.addEventListener("click", e=>{
    e.stopPropagation(); //停止 event bubbling
    console.log("b's event listener's clicked!!")
    
})

console.log(localStorage)
console.log(sessionStorage,typeof sessionStorage)

localStorage.setItem("sunbing","tingting")
localStorage.setItem("qichu","company")
localStorage.setItem("branch","potato")
console.log(localStorage)

console.log(localStorage.getItem("sunbing"))
localStorage.removeItem("sunbing")
localStorage.removeItem("bingbing")
localStorage.clear()
console.log(localStorage)

sessionStorage.setItem("age",25)
let age = sessionStorage.getItem("age")
console.log(typeof age)

let friends = ['sunbing',"tingting",'lainglaing',12,true]
localStorage.setItem("friends",JSON.stringify(friends))
let  friendParse = localStorage.getItem("friends")
console.log(JSON.parse(friendParse))    
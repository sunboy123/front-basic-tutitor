
console.log("学习javascript！！")

// let age = prompt("请输入年龄:")
// console.log(age)
// alert("your age is "+age)

let x = 10;
x = x +10
console.log(x)
x += 10;
let y = 20;

console.log(x)
let name = "hello, tingting" // 单引号和双引号差不多
console.log(name)

let age = 29;
console.log(name+"; my age is "+age);
console.log(name * age);
console.log("hi ".repeat(5));
console.log(x+y + name);

/**
 * sssss
 * sss
 * ssss
 * sss
 * sss
 */
 
console.log(x.toString()+10);
const pi = 3.1415926;
console.log(pi.toFixed(4));
console.log(name.slice(0,5));
console.log(name.length);
console.log(name.indexOf('ting'));
console.log(name.toUpperCase());
console.log(name.toUpperCase());


sentence  = 'I am a bad '
console.log(name.split())

let a = true;
let c = "true"

console.log(typeof a,typeof c)


let sunbing = null;
console.log(sunbing)
console.log(3 == "3")
console.log(3 === "3")

console.log(4 != "4")
console.log(4 !== 3)


let  friends = ["John","Sandy","Alex","Jim"]
console.log(typeof friends)
console.log(friends[0])
console.log(friends.length)
friends.push("sunbing")
console.log(friends)
friends.unshift("hhahah")
console.log(friends)
friends.shift()
console.log(friends)
friends.pop()
console.log(friends)

function sayHi(name){
    console.log("hello world; " + name)
    return name +" love tingting "
}

xx = sayHi("bingbing");
console.log(xx)

let sunboy = {
    name:"bingbing",
    age:29,
    hobby:"basketball",
    school:"taiyuan",
    location:"beijing",
    is_married:false,
    spouse:null,

    // metod setting
    walk(){
        console.log("i walk ")
    },
    tap(){
        console.log(" i tapped!!")

    },
    sya(name){
        console.log("hello , "+name)
    },
    sayAge(){
        console.log("i am "+this.age+" years old!")
    }

};
console.log(sunboy["name"])
console.log(sunboy.hobby)
sunboy.tap()
sunboy.sya('tutu')
sunboy.age = 60;
sunboy.sayAge()

console.log(typeof sunboy)

for (let i=0 ; i < friends.length; i++){
    console.log(friends[i].toUpperCase())
}

let j = 0;
while (j<=10){
    console.log(j);
    j++;
    if (j === 8){
        console.log('sssss '+j)
        break
    }
}

/**
 * Math object
 * OOP
 * property
 * method
 * PI pow random abs floor
 */

PI = Math.PI
console.log(PI)
console.log(Math.floor(PI))
console.log(Math.floor(1.56))
console.log(Math.random())

while (true) {
    let password = prompt("请输入你心中的密码值")
    password = Number(password)
    console.log(password)
    if (isNaN(password)) {
        alert("请不要输入为空的密码！！")
    } else {
        if (password <= 50) {
            alert("你猜的有点小了")
        }else if (password >= 80) {
            alert("你猜的有点大了")
        }
        else if (password == 71) {
            alert("恭喜你猜中了密码")
            break
        } else {
            alert("请继续猜测")
        }
    }
}


// http://langxiayun-image.test.upcdn.net/static/uikit/app.js
// http://langxiayun-image.test.upcdn.net/static%5Cuikit%5Capp.js
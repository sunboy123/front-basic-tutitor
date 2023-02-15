let logger = console.log.bind(console)

// 使用回调函数来实现异步调用
// function getData(name,callback) {
//     setTimeout(()=>{
//         callback({name:name,age:Math.floor(Math.random() * 40), major:"CS"})
//         console.log("this is code")
//     },3000)
// }
//
// function getMovie(age,callback){
//     if (age<12){
//         setTimeout(()=>{
//             callback("cannot movies")
//         },3000)
//     }else if (age < 18)
//     {
//         setTimeout(()=>{
//             callback("teen movies")
//         },2000)
//     }else{
//         setTimeout(()=>{
//             callback("adult movies")
//         },1000)
//     }
// }
//
// console.log("start .........")
// getData("sunbing",(obj)=>{
//     console.log(obj)
//     let age = obj.age;
//     getMovie(age,(str)=>{
//         console.log(str)
//     })
// })
//
// console.log("end ........")

/**
 * Promise
 */

// let example = new Promise((resolve,reject) =>{
//     reject(new Error(" not allowed!!"))
// } )

// example
//     .then((d)=>{
//     console.log(d)
// })
//     .catch(e=>{
//     console.log(e)
// })


// 使用Promise 来实现异步调用
function getData(name) {
    if (name == "Wilson"){
        return new Promise((reslove,reject) => {
            setTimeout(()=>{
                reslove({name:"Wilson",age:Math.floor(Math.random() * 40)})
            },2000) 
        })
    } else {
        return new Promise((reslove,reject)=>{
            setTimeout(()=>{
                reject(new Error("Not allowed to access data."))
                console.log("this is code")
            },3000)
        })
    }
}

function getMovie(age){
    logger("random age is " + age)
    if (age<12){
        return new Promise((reslove,reject)=>
        {
            setTimeout(()=>{
                reslove({"text":"cannot movies"})
            },3000)
        })
    }else if (age < 18)
    {
        return new Promise((reslove,reject)=>{
            setTimeout( () => {
                reslove({"text":"teen movies"})
            },2000)
        })
        
    }else{
        return new Promise((reslove,reject)=>{
            setTimeout(()=>{
                reject(new Error("Not allowed too old !!!!"))
            },1000)
        })
    }
}

// 将具体操作步骤包在函数里面
function showMovie(){
    console.log("start .........")
    getData("Wilson").then((obj) =>{
        return getMovie(obj.age);
    }).then(msg=>{
        console.log(msg.text)
    }).catch(e=>{
        console.log(e)
    })

    console.log("end ..........")
}

// async await 异步用法 | try catch 异常捕获

async function dealMovie() {
    try {
        const obj = await getData("Wilson");
        const movie = await getMovie((obj.age));
        console.log(movie)
    }
    catch (e){
        console.log(e)
    }

}

// dealMovie()

// Fetch API

// function getJoke(){

//     let url = "https://v2.jokeapi.dev/joke/Programming?type=single"
//     fetch(url).then((d)=>{
//         logger(d)
//     }).catch((e)=>{
//         console.log(e)
//     });

//  }


async function getJoke(){

    let url = "https://v2.jokeapi.dev/joke/Programming?type=single";
    try{
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData)
    }catch(e){
     console.log(e)   
    }
 }

 getJoke()
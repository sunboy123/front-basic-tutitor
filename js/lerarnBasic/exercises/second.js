let thereIsInter = true;
if (thereIsInter){
    console.log("running")
}else {
    console.log('hhhhhh')
}


// let age = prompt("请输入你的年龄：");
// age = Number(age)
// if (isNaN(age)){
//     alert("请输入阿拉伯数字")
// }else {
//     if (age < 0){
//         alert("输入错误请检查你得输入值:")
//     } else  if (age <= 12){
//         alert("你得儿童票100块")
//     }else  if ((12 <= age) && (age <= 65)){
//         alert("你得成人票250")
//     }else{
//         alert("你的敬老票是 150块")
//     }
// }


let password = prompt("请输入你心中的密码值")

if (isNaN(password)){
    alert("请不要输入为空的密码！！")
}else {
    if (password == 89){
        alert("恭喜你猜中了密码")
    }else if (password >= 100){
        alert("你猜的有点大了")
    }else  if (password <= 50){
        alert("你猜的有点小了")
    }

}


var sences = 'i\'m ok';
console.log(sences)
console.log('\x41') ;// ascii 码
console.log('\u4e2d\u6587');
var aa = `ssss
ssss
ssss
ssss

sssss
sss
`
console.log(aa);
// 模版字符串 有点类似 shell 脚本的书写规范

var  name = 'HaiSheng';
var age = 26;
var message = `恭喜${name};你今年${age}, 这么好的年纪拿到了神学院的通知书！！！`;
console.log(message)

// 字符串 操作
console.log(name.length)
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.indexOf('H'))
console.log(name.substring(2,8)) // substring 类似切片操作
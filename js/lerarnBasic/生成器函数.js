function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

console.log(foo(2))


// 斐波那契数列

// function fib(max){
//     var t,
//         a = 0,
//         b = 1,
//         arr = [0,1];
//     while (arr.length < max){
//         [a,b] = [b,a+b];
//         arr.push(b);
//     }
//     return arr
// }
// console.log(fib(5));
// console.log(fib(10));

// 生成器
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
var f = fib(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

var fib = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function () {
        var
            r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;
        if (this.n < this.max) {
            this.n ++;
            return r;
        } else {
            return undefined;
        }
    }
};
console.log('================================================================')
function* test() {
    let id = 0;
    while(true) {
        id++;
        yield id;
    }
    return;
}
var x = test()
console.log(x.next())
console.log(x.next())
console.log(x.next())

// json
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

var s = JSON.stringify(xiaoming,convert,' ');
console.log(s);

// 反序列化
var a = JSON.parse('[1,2,3,4,5]');
console.log(a);
var b = JSON.parse('{"name":"小明","age":14}');
console.log(b);


// var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c';
// .$getJSON(url, function (data) {
//     var info = {
//         city: data.city.name,
//         weather: data.list[0].weather[0].main,
//         time: data.list[0].dt_txt
//     };
//     console.log(JSON.stringify(info,null,' '))
// });



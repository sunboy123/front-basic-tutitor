let header = document.querySelector("header")
let headerAnchor = document.querySelectorAll("header nav ul li a")
console.log(headerAnchor)
console.log(header)
window.addEventListener("scroll",e=>{
    // console.log(window.pageYOffset)
    if (window.pageYOffset != 0){
        header.style.backgroundColor = "rgb(0,0,0,0.7)"
        header.style.color = "white" // 打开此处 a tag此处不生效的原因是a tag 已经自己设置了颜色所以会覆盖
        headerAnchor.forEach(a=>{
            a.style.color = "white"
        })
        // header.style.
    }else{
        header.style = "";
        headerAnchor.forEach(a=>{
            a.style.color = "#0E795F"
        })
    }
})
# 网络 internet
不同电脑装置相连就形成网络，网线-路由器的概念
# 网际网络  www  1990年开发而成
标准的web协议，通过http 协议允许人们传输文件和文档的信息系统

世界各个地方的跨国传输，是通过海底电缆的来进行的

## http协议

解释： 超文本传输协议 HyperText  Transform Protocol

***网页开发*** 

HTML、 CSS、JavaScript 传输文件的三大要素

### 三要素职责
html 骨架 css 衣服  JavaScript 运动交互

*html* : HyperText Markup Language 超文本标记语言

### obeject  物件（对象）
属性+行为 
*html中所有的标签都是objects*

html skeleton (Boilerplate)骨架
head body 脚可选的

申明 lang="en" 是为了让浏览器知道是否需要翻译

meta 属性 viewport 视窗 
 <meta name="description" content="教导大家关于熊猫的基本知识">
这里的描述代表，网址简介，被搜索引擎会识别到

## 好用的插件
```
auto Rename tag  修改标签名称
live server 自动重载修改后的页面
```

## 特标签
#### 锚链
<base> 标签 一个属性 href  target 在head 中全局定义; 可以在a 中自定义target 来进行自定义

### 图片
```
<img src="imags/pandas.jpeg" width="300" height="450" alt="panda picture">
alt 表示 在图片找不到路径的前提下显示的内容
```

## 相对路径和据对路径
相对路径：相对当前目录的路径  提倡使用
绝对路径：使用网址来表示

### 标签之列表
ul：unorder list 点
ol：oeder list   1、2、3序号

### 表格
thread 表头
tbody  表格本身
tfoot  

tr:table row
th:table heading
td: table data

column 列
column span （colspan）列扩展 类似合并单元格的意思
rowspan 

### Form 表单
action:数据传到的目的地
method: get / post
<input>:输入框 input 中的name 用来传递

### input types 
checkbox  
email
file
number
password
radio
range // 颜色渐变的例子

### input attributes
checked -> radio , checkbox
max,min -> number,range
maxlength,minlength -> text password
placeholder
required： 必填项
value

### radio 
通过name 属性来确定

### tools 
selection option 不可打字
datalist 下拉框 可以自己打字
textaria  文本区域

### html 中重要的
- Comment 注解
block， inline
div，br，hr(分割线)
entity codes （html 网页显示各种符号编码）
index.html 
icon 
self-closing tags 自动关闭的标签 代表void element

- 排版方式
h1 上下排列 block element   
img / a 标签 右边排列 inline
Block Element  的 width = Device width （width 100% 也是就是 parent element 宽度）
inline 的宽度取决于标签内容的长度

### css （Casecading Style Sheet  阶层式的样式表）
syntax 语法格式
h1 {
    color:green;
}

#### css放置位置
inline Styling 
弊端： 每一个标签都需要写具体的属性
eg:<h1 class="heading" style="color: aqua">保护猫熊</h1>
internal Styling 内部的 在html中的style 中进行设定
eg:
```
<style>
        /* 写样式表 */
        table{
            border-collapse: collapse;
            border: 1px solid black;
        }
        td{
            padding: 0.25rem;
            border: 1px solid rgb(0, 0, 0);
        }
        h1{
            color:green;
        }
    </style>
```

external Styling  外部的
引入css文件

### css 中的颜色
reserved color: 被保留 140种
rgb:
光学三原色原理，定制化颜色
电脑中只能识别二进制的01，01与是否通电有关系
R、G、B分别代表一个Byte 也就是8个bit；一个颜色有24bit  2的8次方中就是256，从0-255，颜色区间,电脑中可以存储2的24次方种颜色

rgba: alpha 代表透明度 0 代表全透明 1代表本来的rgb值； 透明度的取值范围0-1
hex: 十六进制 0-9 A-F 一共  Google Hex Color
hsl: (hue 色彩,saturation 透明度,lightness 明亮度) 

#### selector 选择器
Universal Selector
element Selector : h1{}
id Selector : 唯一的 #suggest{}
class Selector： 类别 .largeText{}
eg: 多个类别如何使用
<h1 class="buleText largeText">台湾熊猫</h1> 

grouping selector: eg:h1,h2,h3{}
---
descendant selector:后代
eg:
div.link2 a{
    color:aquamarine;
}
---
attribute selector: 属性选择器
---
Pseudo class:
Pseudo elements: before / after
----
###### CSS 规则
casecading
渐层式，按照css文件从上到下依次读取，下面的会覆盖前面的样式
Specificity
特定度
1、id （1，0，0）
2、class （0，1，0）
3、tag （0，0，1）
```
h1.redText{}  => (0,1,1)
h1{} => (0,0,1)
```
inheritance:
继承
1、继承属性  
2、本身属性 
如果本身没有属性，就会从父类继承；本身有的话就只会显示本身的属性

规则级别；
inline styling > id > class > element selector > inheritance
 ### text styling 文字样式
 font-size: 字体大小 px rem单位
 text-align:对齐方式
 text-decoration: 文本装饰
 line-height： 行高
 letter spacing：行之间的间距
 font-family：字体
 text-indent：文本空白
 text-indent: 32px; 32px 代表两个字符空白

#### background 
backgroud-image
background-color

### css box model
css 的盒模型
margin:两张图片之间的距离是margin
bodder:外框
padding:content到border的距离是padding
content:内容
box的六个属性: width height content padding border margin

#### padding 设定的三种方法
1、padding:2px 10px 6px 5px;  上 右 下 左
2、 上下 左右：padding 2px 4px;
3、上下左右 ： padding 3px;

#### 相对的单位 relative units
%: width,height 相对与parent element的位置
vw： viewport width 视窗的
vh：viewport height 

###  注意 Display
1、block element：可以预设长宽 ， 默认是100%, 上下左右皆可调整margin，可以调整padding  
2、inline element ： 不能设定width 和height, 只能调整左右margin，可以调整padding  
3、inline-block ： 既是inline element 又是 block element 宽度是根据content决定的。  
4、flex-level： 任何在flex 之下的elements 可以使用width height； 上下左右皆可调整margin ，可以调整padding  
特点： 在网页排版方式属于inline element 从左至右； 在width 和 height 属于block element   
inline-block 的五个： img；input；button；select；textarea  
*如何修改inline element 不能设定长和宽*
使用display来切换inline和block元算类型  

#### box model
#### CSS Position
static: 静态位置 normal flow of document，静态无法设置z轴  
relative:相对位置 相对于自己 z-index 垂直  
absolute：绝对位置设定 他的位置取决于离他最近的  parent 可以设置z-index,参考系是视窗  viewport html的标签；如果想要修改则在所在上层去处理设置相对位置  
Fixed: 固定的，用途在导航栏等等
Sticky:粘住

#### CSS Default Styling
list-style-type:标号的类型显示
table styling
border-collapse
opacity:透明度

#### transition
动画
property name
duration
timing function:控制时间动画关系
eg:
h1 {transition:all 0.5s ease;}

### 2D Transfrom 转变
translate: 改变位置
rotate: 旋转
scale: 缩放 以中心点进行缩放

##### 依据坐标轴进行旋转
rotateX()
rotateY()
rotateZ()

### CSS Animation 动画 2D+3D+transition
动画属性
动画的动作：animation-name:cross;   
动画时长：animation-duration:1s;  
动画延时：animation-delay: 1.2s;  
位置：position:relative;
循环执行次数：animation-iteration-count: infinite;  
方向：animation-direction: alternate;  
动画加速等：animation-timing-function: ease-in-out;  
animation-fill-mode: forwards;  
/* animation: cross ;  统一所有的属性*/ 
- 动作函数
@keyframes cross {
    from {
        background-color:aqua;
        top:0px;
        left:0px;
    }
    to {
        background-color:rgb(207, 13, 23);
        top:400px;
        left:400px;

    }
}

#### other topic in css
border-radius 圆角
overflow (hidden,scoller)
float nad clear -> flex box

#### html5 Semantic elements 语义标签
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>

#### CSS 进阶 
- flexbox 排版 旧版float and clear
flexibility 自动适配
1、flex-direction
display:flex; 必须配置 container中
flex-direction:row-reverse; 行反向
flex-wrap:wrap; 当空间不够时，会自动向下排版，固定宽度
flex-group: 放大倍率
flex item width
:不设定宽度 预设宽度
:设定统一宽度 设置的宽度为最大宽度，和固定宽度
:flex-basic 最小值

- position in flexbox
justify-content: 设定跟direction 平行的位置
align-items：跟direction 方向是垂直的

- flex 伸缩
flex-grow
flex-shrink
flex-basis
简单写法: flex: flex-grow flex-shrink flex-basis;

- flex-grow 宽度计算 方式
总宽度： total
flex-basis的宽度：x
flex-grow:所占比例 y
某个box的总长度计算：total * y + x

#### box-sizing 
1、content-box 默认的
2、border-box

### 响应式网页设计 RWD
可以使用flexbox 处理的部分就是用flexbox
不可以使用的部分善于用media query 来处理

类似重写属性的方法
例子：
@media screen and (max-width: 650px) {
    nav ul {
        flex-direction: column;
    }
}

#### HTML CSS 进阶
1、user snipat/trigger
2、free icon/picture
3、bookmarket: 类似目录导航的， 如果不加Scroller-behavior 会直接跳转过去的
4、scroller-behavior ：滑动的行为效果,设置smooth 
再html 上去加此种效果
html{
    scroll-behavior: smooth;
}

5、Local Font: 本地字体
在css文件中进行设置项
*{
    font-family: 'myFont',sans-serif;
}

@font-face {
    font-family: "myFont" ;
    src: url(../../resources/JasonHandwriting/JasonHandwriting1.ttf);
}


6、Live Sass Compiler vscode插件
scss watching 
scss 可以保证网页在不同的浏览器中正常显示
scss 5 大注意属性

6.1 nested CSS  可以使用更加舒适的办法来进行书写css 
scss 文件中
header {
    background-color: cornflowerblue;
    h1{
        color: chocolate;
    }
}

自动转换到css文件中的各式为
header {
  background-color: cornflowerblue;
}

header h1 {
  color: chocolate;
}

6.2 variables ：变量
css 中可以使用变量来进行书写代替，在大型的css 文件中做使用效果最好

6.3 self &
&:hover 
6.4 import 
分类
重复利用
注意： 使用import 引入同级文件中的某个css对象的时候
直接import "路径/对象名称"

6.5 mixin

minxin 函数名 (){

}
include 执行函数

7、 object-fit
object-fit: cover; 使图片没有变成被压缩的样子

##留下一个问题不知道在什么时候使用width: 30%

工具：
firfox 下的accessbility 来检查网站的潜在问题
Check for issues -> contrasts

给某些标签增加属性title，可以出现鼠标滑动上去显示字段

#### 使用优化建议：
//设定导航栏随着滑动保留
    position:sticky;
    top: 0;
    z-index: 5;
    background-color: white;
// box-shaow 将导航栏颜色和内容块儿的颜色作区分

height 设置100% 的实效问题的解决,高度取决于他的parent's 的高度
在html，body中进行设定
html, body {
    height:100%;
}
然后再在某个div中去设置他的height 的百分比
div.black {
    width:30%;
    height:30%;
}
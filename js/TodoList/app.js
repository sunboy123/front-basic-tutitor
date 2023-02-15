let section = document.querySelector("section")

let add = document.querySelector("form button")
// console.log(add)
add.addEventListener('click',e=>{
    // 禁止表单提交
    e.preventDefault();
    // 获取三个输入框的值
    let form = e.target.parentElement;
    // console.log(form.children)
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;
    // console.log(todoText,todoMonth,todoDate)

    // js 动态创建一个
    let todo  = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth +' / ' +todoDate;
    todo.appendChild(text);
    todo.appendChild(time);
    
    if (todoText == "" | todoMonth == "" | todoDate == ""){
        alert("请必须输入内容！！");
        return;
    }

    //创建勾选和垃圾桶删除项
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.addEventListener("click",e=>{
        let todoItem = e.target.parentElement;
        todoItem.classList.add("done");
    })


    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'

    trashButton.addEventListener("click",e=>{
        console.log(e.target)
        let todoItem = e.target.parentElement;

        //处理删除item的延时问题
        todoItem.addEventListener("animationend",e=>{
            let text = todoItem.children[0].innerText;
            console.log(1111,text)
            let myListArray = JSON.parse(localStorage.getItem("list"));
            myListArray.forEach((item,index) => {
                if (item.todoText == text){
                    myListArray.splice(index,1);
                    localStorage.setItem("list",JSON.stringify(myListArray));
                }
            })
            todoItem.remove();
        })

        todoItem.style.animation = "scaleDown 0.3s forwards";
        // todo.remove() 直接删除不会出现动画的效果
    })

    

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);


    // 创建一个可存储的对象
    let myTodo = {
        todoText:todoText,
        todoMonth:todoMonth,
        todoDate:todoDate
    };

    //使用数组存储 data
    let myList = localStorage.getItem("list");
    console.log(myList)
    if (myList == null){
        localStorage.setItem("list",JSON.stringify([]))
    }else{
        let myListArray = JSON.parse(myList);
        myListArray.push(myTodo);
        localStorage.setItem("list",JSON.stringify(myListArray))
    }
    console.log(JSON.parse(localStorage.getItem("list")))

    todo.style.animation = "scaleUp 0.5s forwards"
    // 清空表单
    for (let i=0;i<3;i++){
        form.children[i].value = "";
    }
    section.appendChild(todo);
   
})

loadData();

function loadData() {
    let myList = localStorage.getItem("list");
    // console.
    if (myList !== null){
        let myListArray = JSON.parse(myList);
        myListArray.forEach(element => {
            let todo = document.createElement("div");
            todo.classList.add("todo");
            let text = document.createElement("p");
            text.classList.add("todo-text");
            text.innerText = element.todoText;
            let time = document.createElement("p");
            time.classList.add("todo-time");
            time.innerText = element.todoMonth +' / ' +element.todoDate;
            todo.appendChild(text);
            todo.appendChild(time);
            let completeButton = document.createElement("button");
            completeButton.classList.add("complete");
            completeButton.innerHTML = '<i class="fas fa-check"></i>';
            completeButton.addEventListener("click",e=>{
                let todoItem = e.target.parentElement;
                todoItem.classList.add("done");
            })


            let trashButton = document.createElement("button");
            trashButton.classList.add("trash");
            trashButton.innerHTML = '<i class="fas fa-trash"></i>'

            trashButton.addEventListener("click",e=>{
                // console.log(e.target)
                let todoItem = e.target.parentElement;

                //处理删除item的延时问题
                todoItem.addEventListener("animationend",e=>{
                    let text = todoItem.children[0].innerText;
                    let myListArray = JSON.parse(localStorage.getItem("list"));
                    myListArray.forEach((item,index) => {
                        if (item.todoText.trim() == text.trim()){
                            myListArray.splice(index,1);
                            localStorage.setItem("list",JSON.stringify(myListArray));
                        }
                    })
                    todoItem.remove()
                })

                todoItem.style.animation = "scaleDown 0.3s forwards";
                // todo.remove() 直接删除不会出现动画的效果
            })
            todo.appendChild(completeButton);
            todo.appendChild(trashButton);
            section.appendChild(todo);
        });
        
    }
}



/**
 * 归并排序的算法
 * n*log2n 次数
 * 思路,分组比较，然后合并在进行分组比较； 采取的是分治法的思路
 */
function MergeTime(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth) ){
            result.push(arr2[j]);
            j++;
        }else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth) ){
            result.push(arr1[i])
            i++;
        }else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)){
            if (Number(arr1[i].todoDate) > Number(arr2[j].todoDate)){
                result.push(arr2[j]);
                j++;
            }else{
                result.push(arr1[i]);
                i++;
            }
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while (j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
}

function MergeSort(arr){
    if (arr.length == 1){
        return arr
    }else{
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0,middle);
        let right = arr.slice(middle,arr.length)
        console.log("left",left,MergeSort(left))
        console.log("right",right,MergeSort(right))
        return MergeTime(MergeSort(left), MergeSort(right)); // 递归分组
    }
}


// console.log(MergeSort(JSON.parse(localStorage.getItem("list"))))

function MPSortEach(arr){
    arr.forEach(() => {
        let i = arr.length;
        let temp;
        if (i>0){
            for (let j = 0; j < i - 1; j++) {
                if (Number(arr[j].todoMonth)+arr[j].todoDate > Number(arr[j + 1].todoMonth+arr[j+1].todoDate)) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            i--;
        }

    })
    return arr
}

// button 实现排序功能
let sortButton = document.querySelector("div.sort button");
sortButton.addEventListener("click",e=>{
    let sortedArray = MPSortEach(JSON.parse(localStorage.getItem("list")));
    localStorage.setItem("list",JSON.stringify(sortedArray));

    // remove data
    let len = section.children.length;
    for (let i = 0;i<len;i++){
        section.children[0].remove();
    }
    //load data
    loadData();
})
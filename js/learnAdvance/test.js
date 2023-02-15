class  Person{
    constructor(name,age,height,weight) {
        this.name = name,
            this.age = age,
            this.height = height,
            this.weight = weight
    }
    say() {
        console.log(this.name+", love jesus!!")
    }

    intro(){
        console.log(this.name+", love money")
    }
}
let Wilson = new Person("Wilson",26,170,180)
console.log(Wilson)

class Student extends  Person{
    constructor(name,age,height,weight) {
        super(name,age,height,weight);
        this.major = major,
        this.grade = grade
    }
    study(){
        console.log(this.name +" sutding math!")
    }
}
let bin = new Student("bingbing",23,45,56,"CS",0.56)
console.log(bin)
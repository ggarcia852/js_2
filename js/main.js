// Exercise #1 

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}   

for (let key in person3) {
    console.log(`${key}: ${person3[key]}`);
} 




// Exercise #2

class Person{
    constructor(name, age){
    this.name = name
    this.age = age
    }
    info(){
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
    birthday(){
        this.age ++
        return (`Happy ${this.age} Birthday, ${this.name}!`)
    }
}

const alex = new Person('Alex', '29');
const george = new Person('George', '32');

console.log(george.info())
console.log(alex.info())

george.birthday()
george.birthday()
console.log(george.birthday())





// Exercise #3

function replaceEvens(arr){
    for (let i=0; i<arr.length; i++){
        if (i % 2 === 0){
            arr.splice(i, 1, 'even index')
        } 
    }return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))
console.log(replaceEvens([0,1,2,3,4,5,6,7,8,9,10]))

console.clear
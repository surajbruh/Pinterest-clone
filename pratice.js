// const x = [1,2,3,5];

// let a = x.map(e=>{
//     return e;
// })

// // let b = x.filter((e)=> e>2)
// // console.log(b)
// let b = x.filter((e)=>{
//     return e>5
// })
// console.log(b)


const x = {
    name: "suraj",
    age: 20
}

Object.freeze(x)
x.age = 18;
console.log(x.age);
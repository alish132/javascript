// +++++++++++++++++++++   reduce   ++++++++++++++++++++++++

let num = [1,2,3,4,5]

let result = num.reduce((acc,curr)=>{   // acc = accumulator  and curr = currentValue
    return acc + curr
},0)
// console.log(result);

let shoppingCart = [
    {
        course: 'Js Course',
        price: 299
    },
    {
        course: 'python Course',
        price: 999
    },
    {
        course: 'React Course',
        price: 5999
    },
    {
        course: 'JS Backend Course',
        price: 6999
    },
    {
        course: 'Frontened Course',
        price: 7500
    },
    {
        course: 'Figma Course',
        price: 4999
    },
]

let totalPrice = shoppingCart.reduce((acc,curr) => (curr.price + acc),0)

console.log(totalPrice);
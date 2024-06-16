// +++++++++++++++++++++  For of loop  ++++++++++++++++++
let arr = [10, 89, 29, 7, 0, 29, 28, 74]

for (const i of arr) {
    // console.log(i);

}

const map = new Map()  // This loop is useful for map
map.set('name', 'harry')
map.set('age', '30')
map.set('email', 'harry@microsoft.com')
map.set('profession', 'Software Engineer')
map.set('Address', 'Bangluru')

for (const [keys, values] of map) {
    // console.log(values);

}

// ++++++++++++++++++++++  For in loop  +++++++++++++++++
// This loop is useful for Objects.

let obj = {
    game1: 'PUBG',
    game2: 'Free Fire',
    gam3: 'Call of duty'
}

for (const key in obj) {
    // console.log(obj[key]);
}

let language = ['python', 'c++', 'java', 'Javascript', 'C', 'ruby']
for (const key in language) {
    // console.log(language[key]);
}


// ++++++++++++++++++++++   For each loop  +++++++++++++++++++++++++
// This loop is for Array only

let bigArr = [10, 20, 30, 40, 50, 60, 70]

bigArr.forEach((item) => {   // we make function in this loop and tell what to do with iterated value
    let add = item + 5
    // console.log(add);
})

function print(val) {
    console.log(val);
}

// bigArr.forEach(print)    // We can also give external function as an input.

bigArr.forEach((item, index, arr) => { // This loop also give access to the index and whole array also
    // console.log(item, index, arr);
})

let beautifulPlace = [
    {
        country: 'Nepal',
        place: 'mustang'
    },
    {
        country: 'India',
        place: 'Kedarnath'
    },
    {
        country: 'China',
        place: 'Great wall of china'
    },
    {
        country: 'Maldives',
        place: 'Resort'
    }
]

beautifulPlace.forEach( (item)=>{
    // console.log(item.place);
} )
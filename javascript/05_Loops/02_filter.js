// +++++++++++++++++++++++   Filter   ++++++++++++++++++++++++++++
// In filter we need to return the result .

let numArr = [10,20,30,40,50,60,70,80,90]

// let result = numArr.filter( (num) => {
//     return num > 50
// } )
// console.log(result);


const book = [
    {
        book: 'Book one',
        year: 1990,
        genre: 'Science'
    },
    {
        book: 'Book two',
        year: 2000,
        genre: "History"
    },
    {
        book: 'Book three',
        year: 1995,
        genre: "Science"
    },
    {
        book: 'Book four',
        year: 1998,
        genre: "History"
    },
    {
        book: 'Book five',
        year: 2005,
        genre: "Science"
    },
]

let userBook = book.filter((item)=> {
    return (item.year>1995 && item.genre === 'History')
})

console.log(userBook);
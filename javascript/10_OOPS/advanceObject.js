// We can not change PI value because its writable is false and we can not change that So , it is constant.

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);



const course = {
    name: 'JS Hindi',
    price: 'Free',
    teacher: 'Hitesh sir',
    printMe: function(){
        console.log('Printing');
    }
}
// console.log(Object.getOwnPropertyDescriptor(course,'teacher'));

// Setting writable and enumerable = false so no one can change its teacher value and no loop can run in teacher
Object.defineProperty(course, 'teacher',{
    writable: false,
    enumerable: false
})
course.teacher = 'harry'  // Can not over write teacher because writable is false.
console.log(course);

for (const key in course) {  // Loop can not run on teacher because enumerable is false.
    console.log(course[key]);
}
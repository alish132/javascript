// Generate a random color

function randomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]  // Generating random number and used that number as index to access hex element.
    }
    return color
}

let interval;
// Start Color changing function
const startChangingColor = function(){
    if(interval == null){  // Effiecent Code   (Good Practise)
        interval = setInterval(() => {
            document.querySelector('body').style.backgroundColor = randomColor()
        }, 1000);
    }
}

// Stop color changing function
const stopChangingColor = function(){
    clearInterval(interval)
    interval = null  // Effecient Code  (Good Practise)
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

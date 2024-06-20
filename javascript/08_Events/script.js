// ================> Ignore this method to add events in elements.  <==============

// document.getElementById('cat').onclick = function(){  
//     alert('I am cat')
// }


// ===============> Always use this method to add events in elements  <============

//type(keyboard event type, mouse event type), timestamp, preventdefault()
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

// document.getElementById('cat').addEventListener('click', function(e){
//     alert("This is cat")
//     console.log(e);
// })

// ==========>  false (Bubble phase)   <=================
// Inner eventlistener will implement first then after outer
// document.getElementById('images').addEventListener('click', function(e){
//     console.log('This inside ul');
// },false)
// document.getElementById('cat').addEventListener('click', function(e){
//     console.log('This is cat');
//     // e.stopPropagation()   // This will stop parent eventlistener
// },false)

// ===========> true (Capture phase)   <===================
// Outer eventlistener will implement first then after inner
// document.getElementById('images').addEventListener('click', function(e){
//     console.log('This inside ul');
// },true)
// document.getElementById('cat').addEventListener('click', function(e){
//     console.lkog('This is cat');
// },true)



// Removing image by simply clicking in that image.
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode
    if(removeIt.tagName == 'LI'){
        console.log('It is li');
        removeIt.remove()
    }

})
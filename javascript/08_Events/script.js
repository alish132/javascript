// ================> Ignore this method to add events in elements.  <==============

// document.getElementById('cat').onclick = function(){  
//     alert('I am cat')
// }


// ===============> Always use this method to add events in elements  <============

//type(keyboard event type, mouse event type), timestamp, preventdefault()
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

document.getElementById('cat').addEventListener('click', function(e){
    alert("This is cat")
    console.log(e);
})

// document.addEventListener('keydown', function(event){
//     console.log(event.key);
//     console.log(event.ctrlKey);
// })

document.addEventListener('keydown', function(event){
    console.log(event.key);
    let h1 = document.getElementById('heading')
    if(event.key == 'Enter'){
        h1.innerHTML = 'World best Website'
    }
})


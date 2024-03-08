const btn =  document.getElementById('click-me-btn');
let hex = document.getElementById('hex-code');



//function to get random color
let color = null;
function getRandomColor(){
    let letters = '0123456789ABCDEF';
     color = '#';
    for(let i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random()*16)]
    }
    return color;
   }
   
   btn.addEventListener('mouseover', ()=>{
    document.body.style.backgroundColor = getRandomColor();
    hex.innerHTML = getRandomColor();
   })
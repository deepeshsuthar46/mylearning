function givemeRandomno(){
   let ran= document.getElementById('root')
   
   let random= Math.floor(Math.random()*6+1)
   ran.innerHTML=random

}
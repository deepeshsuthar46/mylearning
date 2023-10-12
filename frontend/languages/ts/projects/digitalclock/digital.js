function timer(){
let munites=0
let sec=0
let hours=0
let mytimer=document.getElementById('root')

setInterval(()=>{
    console.log()
    mytimer.innerHTML=`munites:${munites}sec:${sec}`
    sec++
    if(sec==10){
        munites++ 
        sec=0
    }
},1000)



}

timer()
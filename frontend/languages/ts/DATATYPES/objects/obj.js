let mobile={camera:1,speaker:2,screen:"large screen"}

let productApi=[{prise:300,
    name:'addidas',
    img:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
]




let div=document.getElementById('root')
let img=document.createElement('img')
let p=document.createElement('p')
p.innerHTML=productApi[0].name
let h1=document.createElement('h1')
h1.innerHTML=productApi[0].prise
img.src=productApi[0].img
img.style.width="200px"
div.appendChild(img)
div.appendChild(p)
div.appendChild(h1)
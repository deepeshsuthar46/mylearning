async function billing(){
    let person1=100
    let person2
    let person3=300

    person2=new Promise((f,nf)=>{

        setTimeout(()=>{
            f(200)
        },2000) 
   
})
person2=await person2
console.log(person2)
        
   
   
   // console.log(data)
     let total=person1+person2+person3
    console.log(total)
}
billing()




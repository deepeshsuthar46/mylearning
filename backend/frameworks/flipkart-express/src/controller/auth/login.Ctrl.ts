import { userExistesCheck } from "../../service/userExistesCheck.service"

export let loginController=async(req:any,res:any)=>{
   let {email,password}=req.body
   console.log(email,password)
 let datya= await userExistesCheck(email)
 console.log("gg",datya)
 let invalid=[{state:"wromg email id password"}]
 if(datya.length==0){
    res.send(invalid)
 }else{
    if(datya[0].password==password){
        res.send(datya)
     }else{
        res.send(invalid)
     }
 }
 

    
}

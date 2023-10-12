let {UserRegister}=require('../models')
export const saveUser=async(props:any)=>{
   
     
     let ganga=new UserRegister({...props})
     ganga.save()
   
   
    return ganga
}
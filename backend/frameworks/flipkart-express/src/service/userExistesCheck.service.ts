let {UserRegister}=require('../models')
export const userExistesCheck=async(email:any)=>{
    let find=await UserRegister.find({email:email})
    
    return find
}
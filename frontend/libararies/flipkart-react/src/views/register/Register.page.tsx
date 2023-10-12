import { Container, Grid } from "@mui/material"
import { useState } from "react"
import {  registerApi } from "../../API/auth/register.service"
import { useNavigate } from "react-router-dom"

export const Register:React.FC=()=>{
    let navigate=useNavigate()
   let [name,setName]=useState('')
   let [password,setPassword]=useState('')
   let [email,setEmail]=useState('')

   let handleClick=async()=>{
    
   let data:any=await registerApi(name,email,password)
   if(data.length !=0){
    navigate('/client/login')
   }else{
    alert('email taken')
   }
}
    return <>
<Container fixed>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<h1>Register form</h1>
    <div>
    <label htmlFor="">name</label><br />
    <input type="text" name="" id="" onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <div>
    <label htmlFor="">email</label><br />
    <input type="email" name="" id="" onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    <div>
    <label htmlFor="">password</label><br />
    <input type="password" name="" id="" onChange={(e)=>{setPassword(e.target.value)}} />
    </div>
    <button onClick={handleClick}>submit</button>
</Grid>
    
    
</Container>

    </>
}
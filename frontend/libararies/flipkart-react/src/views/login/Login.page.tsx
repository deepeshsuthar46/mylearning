import { Button, Container, Grid } from "@mui/material"
import { Fragment } from "../../components/content/fragment/Fragment.com"
import { MyProps } from "../../components/content/props/MyProps.com"
import { Navbar } from "../../components/navbar/Navbar.com"
import { useState } from "react"
import { LoginApi } from "../../API/auth/login.service"
import { Await, Link } from "react-router-dom"

export const Login:React.FC=()=>{
   let [email,setEmail]=useState('')
   let [password,setPassword]=useState('')

   let handleclick=async()=>{
    alert(email+""+password)
  let data:any= await LoginApi(email,password)
  console.log(data[0],data[0].state)
  if(data[0].state){
    alert('wromg email id password')
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
<h1>login form</h1>
    <div>
    <label htmlFor="">name</label><br />
    <input type="email" name="" id="" onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    <div>
    <label htmlFor="">password</label><br />
    <input type="password" name="" id="" onChange={(e)=>{setPassword(e.target.value)}} />
    </div>
    <button onClick={handleclick}>submit</button>
    <Link to={'/client/register'}>
    <Button color='success'>register</Button></Link>
</Grid>
    
    
</Container>

    </>
}
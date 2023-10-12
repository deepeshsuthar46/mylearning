import { Grid } from "@mui/material"
import { product } from "../../API/product.service"
import { MyCard } from "./Mycard.com"
import { validateHeaderName } from "http"
import { useEffect, useState } from "react"

export let CardContainer:React.FC=()=>{
    let [apidata,setApidata]=useState<any>()
let [data,setData]=useState<any>()
   useEffect(()=>{
    let val= product()
    val.then((a)=>{ 
        console.log("--",a
        ) ;setApidata(a)})
   },[])
   useEffect(()=>{
   
    (async()=>{
        let val= product()
       let mydata= await val
       console.log("im advance",mydata)
       setData(mydata)
    })()
   },[])
   console.log("123",apidata
    )
    return <>
    <Grid
   container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
    <h1>new way</h1>
{data?.map((item:any)=>{return <><MyCard img={item.image}/></>})}
<h1>old way</h1>
{apidata?.map((item:any)=>{return <><MyCard img={item.image}/></>})}
</Grid>


    </>
}


function abc(){
    let child
    let setChild=(data:any)=>{
child=data
    }
    return [child,setChild]
}
import { useEffect, useState } from "react"

export const UserInput: React.FC = () => {
   let [val,setVal]= useState()
   useEffect(()=>{alert("im running")})
   useEffect(()=>{alert("im running")},[val])
    let smt = "hello im threr"
    let handelChange=(e:any)=>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
    return <>
        <input type="text" onChange={handelChange} />
        <div>
            {val}
        </div>

    </>
}
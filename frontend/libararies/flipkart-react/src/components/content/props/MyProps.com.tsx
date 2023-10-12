export const MyProps:React.FC=()=>{
    return <>
    <Calu img={"hello im calu 1"}/>
    <Calu img={"hello im calu 2"}/>
    <Calu img={"hello im calu 3"}/>
    <Calu img={"hello im calu 4"}/>
    <Calu img={"hello im calu 5"}/>
    </>
}
let Calu:React.FC<{img:any}>=(value:any)=>{
    console.log(value)
    return <>
    {value.img}
    </>
}
// function Calu(value:any){
    
// }
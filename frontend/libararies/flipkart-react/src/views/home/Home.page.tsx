import { Container, Grid } from "@mui/material"
import { Navbar } from "../../components/navbar/Navbar.com"
import { Myslider } from "../../components/slider/Myslider.com"
import { MyCard } from "../../components/cards/Mycard.com"
import { CardContainer } from "../../components/cards/CardContainer"

export const Home:React.FC=()=>{
    return  <>
    <Container >
   
<Grid
 
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
<Myslider/>

</Grid>

<CardContainer/>


 

    </Container></>
    
}

















// export const Home:React.FC=()=>{
//     return <div>
//        {/* {Myh1("HELLO")} */}
//        <Myh1 mygift={"hello im one"}/>
//        <Myh1 mygift={"hello im three"}/>
//        <Myh1 mygift={"hello im otwo"}/>
//     </div>
// }

// let Myh1:React.FC<{mygift:any}>=(props)=>{
//     return <h1>{props.mygift}</h1>
// }
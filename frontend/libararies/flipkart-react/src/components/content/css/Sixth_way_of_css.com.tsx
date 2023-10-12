import styled from "styled-components"

export const Sixth_way_of_css:React.FC=()=>{
    let Mydiv=styled.div`
    width:200px;
    height:200px;
    background-color:${()=>{return "orange"}}`
    return <Mydiv/>
}
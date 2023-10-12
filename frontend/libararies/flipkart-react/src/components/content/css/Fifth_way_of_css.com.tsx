export const Fifth_way_of_css:React.FC=()=>{
    return <div>
        <MyDiv/>
        <MyDiv/>
        <MyDiv/>
        <MyDiv/>
        <MyDiv/>

        <MyDiv/>
    </div>
}
let MyDiv=()=>{
    return <div style={{width:'200px',height:'200px',backgroundColor:'blue'}}></div>
}
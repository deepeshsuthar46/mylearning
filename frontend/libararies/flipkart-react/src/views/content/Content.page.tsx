import { BootstrapExample } from "../../components/content/bootstrap/BootstrapExample.com"
import { Fifth_way_of_css } from "../../components/content/css/Fifth_way_of_css.com"
import { NormalCss } from "../../components/content/css/NormalCss.com"
import { Second_way_of_css } from "../../components/content/css/Second_way_of_css.com"
import { Sixth_way_of_css } from "../../components/content/css/Sixth_way_of_css.com"
import { Thired_way_of_css } from "../../components/content/css/Thired_way_of_css.com"
import { UserInput } from "../../components/content/hookes/UserInput.com"
import { LifeCycleMethods } from "../../components/content/lifecyclemethods/LifeCycleMethods.com"
import { Mui } from "../../components/content/mui/Mui.com"

export const Content:React.FC=()=>{
    return <div>
        <h1>mui topics</h1>
       < Mui/>
<h1>life cycle methods</h1>
<LifeCycleMethods/>
      <h1>interview quation</h1>
      <UserInput/>
  <h1>bootstrap section</h1>
<BootstrapExample/>
<BootstrapExample/>
<BootstrapExample/>
<BootstrapExample/>
<BootstrapExample/>
<h1>css section</h1>
        <NormalCss/>
        <Second_way_of_css/>
        <Thired_way_of_css/>
        <Fifth_way_of_css/>
        <Sixth_way_of_css/>
      
    </div>
}
import { Navbar } from "./components/navbar/Navbar.com"
import { Home, Login, Register } from "./views"
import {BrowserRouter as HistoryGUY,Routes,Route} from 'react-router-dom'
import MyRoutes from './routes'
export const App:React.FC=()=>{
  return  <div>
    <MyRoutes/>
{/* <Navbar/>
<HistoryGUY>
<Routes >
  <Route path="/home" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
</Routes>
</HistoryGUY> */}

  </div>
}
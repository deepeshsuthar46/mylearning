import { useRoutes } from "react-router-dom";
import { UserRoutes } from "./User.routes";

export default function Allroutes(){
    return useRoutes([UserRoutes])
}
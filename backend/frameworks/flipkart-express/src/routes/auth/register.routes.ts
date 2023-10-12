import { Route } from "../../../config/common.config"
import { loginController } from "../../controller/auth/login.Ctrl"
import { registerController } from "../../controller/auth/register.Ctrl"


Route.route('/register')
.post(registerController)
module.exports=Route
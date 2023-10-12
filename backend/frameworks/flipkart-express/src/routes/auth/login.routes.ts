
import {Route} from '../../../config/common.config'
import { loginController } from '../../controller/auth/login.Ctrl'

Route.route('/login')
.post(loginController)
module.exports=Route
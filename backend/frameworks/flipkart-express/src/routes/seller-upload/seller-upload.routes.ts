import { Route } from "../../../config/common.config"
import { loginController } from "../../controller/auth/login.Ctrl"
import { registerController } from "../../controller/auth/register.Ctrl"
import { selleruPload } from "../../controller/seller-upload/seller-upload.Ctrl"


// Route.route('/seller-upload/:id')
//Route.route('/seller-uploa+d')
//Route.route('/seller-uplo+ad')
Route.route('/seller-upload')
.post(selleruPload)
module.exports=Route
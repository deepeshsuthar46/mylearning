let {Schema}=require('mongoose')
let mangoose=require('mongoose')
let studentStruc=new Schema({
    name:String,
    class:String,
    chocalate:String
})
module.exports=mangoose.model('user',studentStruc)
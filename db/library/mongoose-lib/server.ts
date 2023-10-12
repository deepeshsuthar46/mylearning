require('./config/db.config')
var {User}=require('./src/models')

// let data={name:'samiulla',class:'fullstack',chocalate:
// "kitkat"}
// let ganga=new User(data)
// ganga.save()

// let finder =async()=>{
//     let findall=await User.find({name:'samiulla'})
//     console.log(findall)
// }
// finder()
// let deleter =async()=>{
//     let findall=await User.deleteOne({chocalate:'fuse'})
//     console.log(findall)
// }
// deleter()

let updated =async()=>{
    let findall=await User.updateOne({name:'samiulla'},{$set:{chocalate:'cadbury'}})
    console.log(findall)
}
updated()

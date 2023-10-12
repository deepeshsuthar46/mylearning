let path=require('path')
export const selleruPload=async(req:any,res:any)=>{
    console.log(req.files.img)
    let imgPath=path.join(__dirname,'../../../public/images')
     let  fileName=req.files.img
    await fileName.mv(`${imgPath}/${fileName.name}`,(err:any)=>{
        console.log(err)
    })//jj

    res.send(`hello im working`)
    //res.send(`hello im working ${req.params.id}`)
}
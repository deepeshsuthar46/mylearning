let nodemailer=require('nodemailer')
//let mytoken='ccatvgnhjxsbxyof'
let mailSender=async(name:any,email:any,subject:any,text:any)=>{
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        //pass:'aucznmpkooobgqze'
        pass:'give ur own password'
        
    },
    tls: {
        rejectUnauthorized: false
      }
})



let mailoptions={
    from:'waseemahmed116@gmail.com',
    to:`${email}`,
    subject:`${subject}`,
    text:`Hi ${name}${text}`
}
transporter.sendMail(mailoptions,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail sent')
    }
})
}

mailSender('Gauri','ugowrinagesh@gmail.com','test mail','hi vishu how are u')
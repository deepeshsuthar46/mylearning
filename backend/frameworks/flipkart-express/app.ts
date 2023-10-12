require('./config/db.config')
let express=require('express')
let app=express()
let cors=require('cors')
let expressUpload=require('express-fileupload')
app.use(cors())
app.use(expressUpload())
let path=require('path')
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

 app.use(express.static(path.join(__dirname,'public/images')))
 app.use(express.static(path.join(__dirname,'public/videos')))
console.log(path.join(__dirname,'public/image')  )

let endPoint=require('./src/routes/index')


app.use('/api',endPoint.LoginApi)
app.use('/api',endPoint.RegisterApi)
app.use('/api',endPoint.SaveProduct)

















//method chining concept
// app.route('/api/register').
// get((req:any,res:any)=>{
//     res.send("get register api")
// })
// .post((req:any,res:any)=>{
//     res.send("get register api")
// })
// .put((req:any,res:any)=>{
//     res.send("get register api")
// })
// .delete((req:any,res:any)=>{
//     res.send("get register api")
//})
















app.get('/api/diffrent-type-of-data-html',(req:any,res:any)=>{
    let arry=[{apple:'100'}]
    let fun=()=>{console.log('im a function')}
    res.send(`<h1 style="color:red;">abc</h1>`)
 
})
app.get('/api/diffrent-type-of-data-fun',(req:any,res:any)=>{
    let arry=[{apple:'100'}]
    let fun=()=>{console.log('im a function')}
    res.send( [fun])
 
})

app.get('/api/diffrent-type-of-data-obj',(req:any,res:any)=>{
    let arry=[{apple:'100'}]
    res.send({apple:'100'})
 
})

app.get('/api/diffrent-type-of-data-array',(req:any,res:any)=>{
    let arry=[{apple:'100'}]
    res.send([1,3,arry])
 
})


app.get('/api/diffrent-type-of-data-number',(req:any,res:any)=>{
    res.send("hello").sendStatus(345)
 
})




app.get('/api/diffrent-type-of-data-string',(req:any,res:any)=>{
    res.send("hello im string")
    res.send('hello im string')
    res.send(`hello im string`)
})










//its a middle ware

let dataSteeler=(req:any,res:any,next:any)=>{
    console.log("im steeling")
    console.log("im threr",req.params)
    console.log("im threr",req.query)
    next()
    }

//this way u call middleware
    app.use(dataSteeler)
    //basuic example of api
app.get('/home',(req:any,res:any)=>{
    console.log('i got calleed')
    res.send('hello im ur first api')
})


app.get('/middleware',(req:any,res:any)=>{
    res.send("im very secure ")
})

app.get('*',(req:any,res:any)=>{
    res.send('end point do not exits')
})


app.listen(8003,()=>{
    console.log('server is running on http://localhost:8003/')
})
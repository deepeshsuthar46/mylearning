let http=require('http')
let fs=require('fs')
http.createServer((req:any,res:any)=>{

    if(req.url=='/chotu'){
        
fs.mkdirSync('ja')
        res.write('will give u chocalate')
        res.end()
    }
    
    if(req.url=='/motu'){
        res.write('samosa')
        res.end()
    }
      
    if(req.url=='/lambu'){
        res.write(['wife'])
        res.end()
    }
}).listen(8005,()=>{console.log('server started')})
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
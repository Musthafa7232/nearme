 var http=require("http")
 var fs=require("fs")
 var url=require('url')

  http.createServer(function(req,res){
    q=url.parse(req.url,true)
   
    if(q.pathname==='/'){
         fs.readFile('index.html',function(err,data){
   res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data);
    res.end()
})
    }else if(q.pathname==='/signup'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
             res.write(data)
             res.end()
         })
    }else if(q.pathname==='/signupaction'){
       
            res.writeHead(200,{'Content-Type':'text/html'})
             res.write('<h1>'+q.query.fname+'</h1>'+'<h2>'+q.query.lname+'</h2>');
             res.end()
         
    }


   
 }).listen(7000,()=>console.log("server started"))

 
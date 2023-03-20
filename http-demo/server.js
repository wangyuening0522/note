const http=require("http");
const app=http.createServer();
app.on("request",(req,res)=>{
    console.log(req.url);
    var url=req.url;
    if(url==='/'||url==='/home')
    {
        res.end('Welcom to login page')
    }else if(url==='/login')
    {
        res.end('Come to login your accout')
    }
    else if(url==='register')
    {
        res.end('you can Register your accout in there')

    }
    else{
        res.end('404 Not Found...,please try out')
    }
})
app.listen(3000,()=>{
    console.log("Server is running on localhost:3000...");
})
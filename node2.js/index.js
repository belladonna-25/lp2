/*const express=require('express');
const { userInfo } = require('os');
const app=express();
const port=3000;

//to make pages html .txt 

app.use(express.static('public'));

app.listen(port,()=>{
    console.log("app started on port $(port)");
})
*/


   var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log('request was made :'+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname +'/index.html','utf8');
    myReadStream.pipe(res);

});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now listening to port 3000');   

/*const express = require('express')
const path = require('path')
const app = express()
  
// Static Middleware

app.use(express.static(path.join(__dirname, 'public')))
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
  
app.get('/', function(req, res){
    res.render('Demo')
})
  
app.listen(8080, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})*/
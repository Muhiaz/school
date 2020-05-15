const express=require('express')
const bodyParser=require('body-parser')
const request=require('request')
const  https=require('https')

const app=express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.get("/", function(req,res){
    res.send("server")
})

app.post("/", function(req, res){
 const firstname=req.body.fname
 const lastname=req.body.lname
 const email=req.body.email
 const school=req.body.school

 const data={
     members:[
         {
             email_address:email,
             status:"subscribed",
             merge_fields:{
                 FNAME: firstname,
                 LNAME:lastname
             }
         }
     ]
 };
const jsonData=JSON.stringify(data)
const url="https://us18.api.mailchimp.com/3.0/lists/73b827f4ff"
const options={
    method: "POST",
    auth:"madayo:a0add7227275b044b5a81b45d2753c0b-us18"
}

const request= https.request(url, options, function(response){

 if(response.statusCode===200){
     res.sendFile(__dirname +"/success.html")
 }else{
     res.sendFile(__dirname + "/failure.html")
 }
    response.on("data", function(data){
        console.log(JSON.parse(data));
        
    })
})
request.write(jsonData)
request.end()
})

app.post("/failure", function(req,res){
    res.redirect("/")
})



app.listen(process.env.PORT || 3000, function(){
    console.log("server is running");
    
})

